import User from "../models/User.model.js"
import Post from "../models/Post.model.js"
import { v2 as cloudinary } from "cloudinary"

export const createPost = async (req, res) => {
    try {
        const { text } = req.body;
        let { image } = req.body;

        const userId = req.user._id.toString();

        const user = await User.findById(userId);

        if (!user) {
            res.status(404).json({ error: "User not found" });
        }

        if (!text && !image) {
            res.status(400).json({ error: "Post must have image or text" });
        }

        if (image) {
            const uploadedResponse = await cloudinary.uploader.upload(image);
            image = uploadedResponse.secure_url;
        }

        const newPost = new Post({
            user: userId,
            image,
            text
        });

        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        console.log("error in createPost controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find()
        .sort({created: -1})
        .populate({
            path : "user",
            select: "-password"
        })
        .populate({
            path: "comments.user",
            select: "-password"
        })

        if(posts.length === 0){
            return res.status(200).json([]);
        }
        res.status(200).json(posts);
    } catch (error) {
        console.log("error in getAllPosts controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const deletePost = async (req, res) => {
    const userId = req.params.id;
    try {
        const post = await Post.findById(userId);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        if (post.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ error: "You are not authorised to delete this post" });
        }

        if (post.image) {
            const imageId = post.image.split("/").pop().split(".")[0];
            await cloudinary.uploader.destroy(imageId);
        }

        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Post deleted successfully" })
    } catch (error) {
        console.log("error in delete post controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getUserPosts = async (req,res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({username});

        if(!user){
            return res.status(404).json({error: "User not found"});
        }

        const posts = await Post.find({ user: user._id })
			.sort({ createdAt: -1 })
			.populate({
				path: "user",
				select: "-password",
			})
			.populate({
				path: "comments.user",
				select: "-password",
			});

        res.status(200).json(posts);
    } catch (error) {
        console.log("error in getUserPost controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const getFollowingPosts = async (req,res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({error: "User not found"});
        }

        const following = user.following;
        const feedPosts = await Post.find({ user: { $in: following } })
			.sort({ createdAt: -1 })
			.populate({
				path: "user",
				select: "-password",
			})
			.populate({
				path: "comments.user",
				select: "-password",
			});
        res.status(200).json(feedPosts);
    } catch (error) {
        console.log("error in getFollowingPosts", error.message);
        res.status(500).json({error :"Internal server error"});
    }
}

export const getLikedPosts = async (req,res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if(!user){
            res.status(404).json({error: "User not found"});
        }
        const likedPosts = await Post.find({ _id: { $in: user.likedPosts } })
			.populate({
				path: "user",
				select: "-password",
			})
			.populate({
				path: "comments.user",
				select: "-password",
			});

            res.status(200).json(likedPosts);
    } catch (error) {
        console.log("error in getLikedPosts controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }

}

export const likeUnlikePost = async (req,res) => {
    try {
        const userId = req.user._id;
        const postId = req.params.id;

        const post = await Post.findById(postId);

        if(!post){
            return res.status(404).json({error: "Post not found"});
        }

        const userLikedPost = post.likes.includes(userId);

        if(userLikedPost){
            // unlike post
            await Post.updateOne({_id: postId}, {$pull : {likes: userId}});
            await User.updateOne({_id: userId}, {$pull : {likedPosts: postId}});

            const updatedLikes = post.likes.filter((id) => id.toString() !== userId.toString());
            res.status(200).json(updatedLikes);
            
        }else{
            // like post
            post.likes.push(userId);
            await User.updateOne({_id: userId},{$push: {likedPosts: postId}});
            await post.save();

            // notification
            const notification = new Notification({
				from: userId,
				to: post.user,
				type: "like",
			});
			await notification.save();

            const updatedLikes = post.likes;
            res.status(200).json(updatedLikes);
        }
    } catch (error) {
        console.log("error in the like unlike controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const commentOnPost = async (req,res) => {
    try {
        const { text } = req.body;
        const postId = req.params.id;
        const userId = req.params.id;

        if (!text) {
            return res.status(400).json({ error: "Text field is required" });
        }
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        const comment = { user: userId, text };

        post.comments.push(comment);
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        console.log("error in commentonpost controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}
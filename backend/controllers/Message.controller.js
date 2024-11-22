import User from "../models/User.model.js";
import Message from "../models/Message.model.js"

import {v2 as cloudinary} from "cloudinary"

export const getAllUsers = async(req,res) => {
    try {
        const loggedInUser = req.user._id;
        const filteredUsers = await User.find({_id : {$ne: loggedInUser}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("error in getAllUsers controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const getMessages = async (req,res) => {
    try {
        const userToChatId = req.params.id;
        const myId = req.user._id;
        const messages = await Message.find({
            $or: [
                {senderId: myId, receiverId: userToChatId},
                {senderId: userToChatId, receiverId: myId}
            ]
        })

        res.status(200).json(messages);
    } catch (error) {
        console.log("error in getMessages controller",error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const sendMessages = async(req,res) => {
    try {
        const {text,image} = req.body;
        const receiverId = req.params.id;
        const senderId = req.user._id;

        let ImageUrl;

        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            ImageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: ImageUrl
        })

        await newMessage.save();

        // socket.io

        re.status(201).json(newMessage);
    } catch (error) {
        console.log("error in sendMesaage controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}
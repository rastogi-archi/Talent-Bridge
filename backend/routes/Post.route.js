import express from "express";
import { createPost, deletePost, getAllPosts } from "../controllers/Post.controller.js";

const router = express.Router();

router.post("/createPost",createPost);
router.get("/getPost",getAllPosts);
router.delete("/deletePost",deletePost);

export default router;
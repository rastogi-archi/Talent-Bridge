import authRoutes from "./routes/Auth.route.js"
import postRoutes from "./routes/Post.route.js"

import connectDb from "./db/connect.js";

import express from "express";
import dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary"

dotenv.config();
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth",authRoutes);
app.use("/api/post",postRoutes);

app.listen(PORT, () => {
    console.log("port is running at http://localhost:"+PORT);
    connectDb();
})
import path from "path";
import express from "express";
import dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary"
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/Auth.route.js"
import postRoutes from "./routes/Post.route.js"
import notificationRoutes from "./routes/Notification.route.js"
import userRoutes from "./routes/User.route.js"
import messageRoutes from "./routes/Message.route.js"

import connectDb from "./db/connect.js";

dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}
))

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/post",postRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/messages", messageRoutes);

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "/frontend/dist")));

// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// 	});
// }

app.listen(PORT, () => {
    console.log("port is running at http://localhost:"+PORT);
    connectDb();
})

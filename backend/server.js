import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/Auth.route.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
    console.log("port is running at http://localhost:"+PORT)
})
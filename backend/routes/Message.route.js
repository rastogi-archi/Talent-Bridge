import express from "express";
import { protectRoute } from "../middlewares/ProtectRoute.js";
import { getAllUsers, getMessages, sendMessages } from "../controllers/Message.controller.js";

const router = express.Router();

router.get("/user",protectRoute, getAllUsers);
router.get("/:id",protectRoute, getMessages);
router.post("/send/:id",protectRoute,sendMessages);

export default router;
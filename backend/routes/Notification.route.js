import express from "express";
import { protectRoute } from "../middlewares/ProtectRoute.js";
import { getNotifications, deleteNotifications } from "../controllers/Notification.controller.js";

const router = express.Router();

router.get("/",protectRoute,getNotifications);
router.delete("/",protectRoute,deleteNotifications);

export default router;
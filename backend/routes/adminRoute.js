import express from "express";
import { protectRoute, adminRoute } from "../middleware/protectRoute.js";
import { getAdminStats } from "../controllers/adminController.js";

const router = express.Router();
router.get("/stats", protectRoute, adminRoute, getAdminStats);
export default router;

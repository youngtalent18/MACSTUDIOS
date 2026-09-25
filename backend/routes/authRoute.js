import express from "express"
import {protectRoute, adminRoute} from "../middleware/protectRoute.js"
import { getUserProfile, loginUser, logoutUser, refresh_token } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", loginUser)
router.get("/profile", protectRoute, adminRoute, getUserProfile);
router.post("/logout", logoutUser)
router.post("/", refresh_token);

export default router;

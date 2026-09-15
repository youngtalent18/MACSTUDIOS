import express from "express"
import {protectRoute, adminRoute} from "../middleware/protectRoute.js"
import { getUserProfile, loginUser, logoutUser, refresh_token, registerUser } from "../controllers/authController";

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/profile", protectRoute, adminRoute, getUserProfile);
router.post("/logout", logoutUser)
router.post("/", refresh_token);

export default router;
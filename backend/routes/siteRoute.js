import express from "express";
import { adminRoute, protectRoute } from "../middleware/protectRoute.js";
import { createContent, createSubmission, deleteContent, getAdminData, getPublicContent, getPublicSettings, updateContent, updateSettings, updateSubmission } from "../controllers/siteController.js";

const router = express.Router();
router.get("/content", getPublicContent);
router.get("/settings", getPublicSettings);
router.post("/submissions", createSubmission);
router.get("/admin", protectRoute, adminRoute, getAdminData);
router.post("/admin/content", protectRoute, adminRoute, createContent);
router.patch("/admin/content/:id", protectRoute, adminRoute, updateContent);
router.delete("/admin/content/:id", protectRoute, adminRoute, deleteContent);
router.patch("/admin/submissions/:id", protectRoute, adminRoute, updateSubmission);
router.put("/admin/settings", protectRoute, adminRoute, updateSettings);
export default router;

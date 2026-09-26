import express from "express";
import { protectRoute, adminRoute } from "../middleware/protectRoute.js";
import { resourceController } from "../controllers/resourceController.js";
import Booking from "../models/Booking.js";
import Contact from "../models/Contact.js";
import Review from "../models/Review.js";
import BlogPost from "../models/BlogPost.js";
import Portfolio from "../models/Portfolio.js";

const resources = {
  bookings: { Model: Booking, fields: ["fullName", "phone", "email", "service", "preferredDate", "budget", "message", "status"], publicFields: ["fullName", "phone", "email", "service", "preferredDate", "budget", "message"], publicCreate: true, statusField: "status" },
  contact: { Model: Contact, fields: ["name", "email", "phone", "subject", "message", "status"], publicFields: ["name", "email", "phone", "subject", "message"], publicCreate: true, statusField: "status" },
  reviews: { Model: Review, fields: ["name", "service", "rating", "message", "image", "approved", "featured"], publicFields: ["name", "service", "rating", "message", "image"], publicCreate: true, publicFilter: { approved: true }, order: { featured: -1, createdAt: -1 } },
  blog: { Model: BlogPost, fields: ["title", "slug", "excerpt", "content", "category", "image", "author", "published", "featured", "publishedAt"], publicFilter: { published: true }, order: { publishedAt: -1, createdAt: -1 } },
  portfolio: { Model: Portfolio, fields: ["title", "slug", "category", "description", "type", "image", "video", "youtubeVideoId", "youtubeUrl", "featured", "published", "order"], publicFilter: { published: true }, order: { order: 1, createdAt: -1 } },
};

function buildRouter(key, config) {
  const router = express.Router();
  const handlers = resourceController(config);
  if (key === "reviews") {
    router.post("/", handlers.create);
    router.get("/", handlers.list);
    router.get("/admin", protectRoute, adminRoute, (req, res, next) => { req.admin = true; next(); }, handlers.list);
    router.get("/admin/:id", protectRoute, adminRoute, handlers.get);
    router.patch("/admin/:id", protectRoute, adminRoute, handlers.update);
    router.delete("/admin/:id", protectRoute, adminRoute, handlers.remove);
    return router;
  }
  router.post("/", ...(config.publicCreate ? [handlers.create] : [protectRoute, adminRoute, handlers.create]));
  if (config.publicFilter) router.get("/", handlers.list);
  else router.get("/", protectRoute, adminRoute, (req, res, next) => { req.admin = true; next(); }, handlers.list);
  router.get("/admin", protectRoute, adminRoute, (req, res, next) => { req.admin = true; next(); }, handlers.list);
  router.get("/admin/:id", protectRoute, adminRoute, handlers.get);
  if (!config.publicFilter) router.get("/:id", protectRoute, adminRoute, handlers.get);
  if (config.publicFilter?.published) router.get("/:slug", handlers.getBySlug);
  router.patch(config.publicCreate ? "/:id" : "/:id", protectRoute, adminRoute, handlers.update);
  router.delete("/:id", protectRoute, adminRoute, handlers.remove);
  return router;
}

export const bookingRoutes = buildRouter("bookings", resources.bookings);
export const contactRoutes = buildRouter("contact", resources.contact);
export const reviewRoutes = buildRouter("reviews", resources.reviews);
export const blogRoutes = buildRouter("blog", resources.blog);
export const portfolioRoutes = buildRouter("portfolio", resources.portfolio);

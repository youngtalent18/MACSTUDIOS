import express from "express";
import BlogPost from "../models/BlogPost.js";
import Portfolio from "../models/Portfolio.js";

const router = express.Router();
const paths = ["/", "/about", "/services", "/portfolio", "/reviews", "/blog", "/booking", "/contact"];
const baseUrl = (req) => (process.env.SITE_URL || `${req.protocol}://${req.get("host")}`).replace(/\/$/, "");

router.get("/sitemap.xml", async (req, res, next) => {
  try {
    const [posts, projects] = await Promise.all([
      BlogPost.find({ published: true }).select("slug updatedAt").lean(),
      Portfolio.find({ published: true }).select("slug updatedAt").lean(),
    ]);
    const base = baseUrl(req);
    const entries = [
      ...paths.map((path) => ({ loc: `${base}${path}`, priority: path === "/" ? "1.0" : "0.7" })),
      ...posts.map((post) => ({ loc: `${base}/blog/${encodeURIComponent(post.slug)}`, lastmod: post.updatedAt?.toISOString(), priority: "0.6" })),
      ...projects.map((project) => ({ loc: `${base}/portfolio/${encodeURIComponent(project.slug)}`, lastmod: project.updatedAt?.toISOString(), priority: "0.6" })),
    ];
    res.type("application/xml").send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.map((entry) => `<url><loc>${escapeXml(entry.loc)}</loc>${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ""}<priority>${entry.priority}</priority></url>`).join("")}</urlset>`);
  } catch (error) { next(error); }
});

router.get("/robots.txt", (req, res) => {
  res.type("text/plain").send(`User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/\nSitemap: ${baseUrl(req)}/sitemap.xml\n`);
});

function escapeXml(value) { return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;"); }
export default router;

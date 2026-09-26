import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoute from "./routes/authRoute.js"
import youtube from "./routes/youtube.js"
import adminRoute from "./routes/adminRoute.js"
import { bookingRoutes, contactRoutes, reviewRoutes, blogRoutes, portfolioRoutes } from "./routes/resourceRoutes.js"

const app = express();

app.use(cors({
  origin: [
    ...(process.env.CLIENT_ORIGIN || "http://localhost:5173").split(",").map((origin) => origin.trim()),
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(cookieParser());

app.use(helmet());

app.use(express.json({ limit: "10mb" }));

app.use(express.urlencoded({extended: true}));

app.use(morgan("dev"));

app.use("/api/user", authRoute);
app.use("/api/youtube", youtube);
app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/admin", adminRoute);

app.use((err, _req, res, _next) => {
  console.error("Unhandled request error:", err);
  if (err.type === "entity.too.large") return res.status(413).json({ success: false, message: "Request body is too large" });
  return res.status(500).json({ success: false, message: "Internal server error" });
});

app.use((_req, res) => res.status(404).json({ success: false, message: "Endpoint not found" }));

export default app;

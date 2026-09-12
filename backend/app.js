import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
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


export default app;
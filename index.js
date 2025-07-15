import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./backend/db/connectDb.js";
import authRouters from "./backend/routes/auth.route.js";
import blogRoutes from "./backend/routes/blog.routes.js";

// Load environment variables as early as possible
dotenv.config({ path: "./.env" });

const app = express();

//middleware
app.use(
  cors({
    // Allow multiple comma‑separated origins via .env, fall back to "*"
    origin: process.env.CLIENT_URL?.split(",") || "*",
    credentials: true,
  })
);

app.use(express.json()); // Parse JSON payloads
app.use(cookieParser()); // Parse cookies

//routes
app.use("/api/auth", authRouters);
app.use("/api/blogs", blogRoutes);


const PORT = process.env.PORT || 8000;

(async () => {
  try {
    // Establish database connection *before* starting the server
    await connectDB(); // connectDB reads MONGO_URI internally
    app.listen(PORT, () => {
      console.log(`🚀  Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌  Failed to start server:", err);
    process.exit(1);
  }
})();

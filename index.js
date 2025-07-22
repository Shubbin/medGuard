import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import adminRoutes from "./backend/routes/admin.route.js";
import { connectDB } from "./backend/db/connectDb.js";
import authRouters from "./backend/routes/auth.route.js";
import blogRoutes from "./backend/routes/blog.routes.js";
import reportRoutes from "./backend/routes/report.route.js";
import cors from "cors";
import { verifyDrugByNRN } from "./backend/controllers/drug.controller.js";

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
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));



//routes

app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRouters);
app.use("/api/blogs", blogRoutes);
app.use("/api/drugs/verify", verifyDrugByNRN)
app.use("/api/reports", reportRoutes);

const PORT = process.env.PORT || 8000;

(async () => {
  try {
   
    await connectDB(); 
    app.listen(PORT, () => {
      console.log(` Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error(" Failed to start server:", err);
    process.exit(1);
  }
})();

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./backend/db/connectDb.js";
import authRouters from "./backend/routes/auth.route.js";
import blogRoutes from "./backend/routes/blog.routes.js";
dotenv.config();

const app = express(); 
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true, // if you use cookies or auth headers
  })
);

app.use(express.json()); // parse JSON bodies
app.use(cookieParser()); // parse cookies
app.use("/api/auth", authRouters);
app.use("/api/blogs", blogRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  connectDB(process.env.MONGO_URI);
  console.log(`Server is running on port: ${port}`);
});


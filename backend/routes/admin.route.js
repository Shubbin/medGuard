import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controllers/auth.controllers.js";

import { verifyToken, protect } from "../middleware/authMiddleware.js"; // ✅ now valid

const router = express.Router();

// Check if user/admin is authenticated
router.get("/check-auth", verifyToken, checkAuth);

// Auth routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;

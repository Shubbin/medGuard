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

import {
  searchUsers,
  deleteUser,
  updateUserRole,
  getUsers,
} from "../controllers/admin.controller.js";
import { protect } from "../middleware/authMiddleware.js";

// ✅ Declare router first
const router = express.Router();

// 🔐 Protected admin routes
router.get('/users/search', protect, searchUsers);
router.delete('/users/:id', protect, deleteUser);
router.put('/users/:id/role', protect, updateUserRole);
router.get('/users', protect, getUsers);

// 🔓 Public auth routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

// 📤 Export router
export default router;
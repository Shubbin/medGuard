import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth
} from "../controllers/auth.controllers.js";
import { protect } from "../middleware/authMiddleware.js"; 

const router = express.Router();


router.get("/check-auth", verifyToken, (req, res) => {
  // This assumes you're attaching user/admin to req in verifyToken
  const user = req.user || req.admin;

  if (!user) {
    return res.status(403).json({ error: "Not authorized" });
  }

  res.status(200).json({ user });
});

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;

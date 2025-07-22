// routes/admin.route.js
import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { checkRole } from "../middleware/checkRole.js";
import { getAllUsers, updateUserRole } from "../controllers/admin.controller.js";

const router = express.Router();

router.patch(
  "/update-role",
  verifyToken,
  checkRole("admin"), // or add "sub-admin" if you want them to manage roles too
  updateUserRole
);
router.get(
  "/users",
  verifyToken,
  checkRole("admin", "sub-admin"),
  getAllUsers
)

export default router;

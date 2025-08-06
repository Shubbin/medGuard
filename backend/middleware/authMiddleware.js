import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import Admin from "../models/admin.models.js";

// 🔐 Helper to extract token from Authorization header or cookie
const getTokenFromHeader = (req) => {
  const authHeader = req.headers.authorization || req.cookies.token;
  if (!authHeader) return null;

  if (authHeader.startsWith("Bearer ")) {
    return authHeader.split(" ")[1];
  }

  return authHeader;
};

// 🔐 General verification middleware for both user and admin
export const verifyToken = async (req, res, next) => {
  const token = getTokenFromHeader(req);
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check both user and admin databases
    const user = await User.findById(decoded.id).select("-password");
    const admin = await Admin.findById(decoded.id).select("-password");

    if (!user && !admin) {
      return res.status(401).json({ error: "User/Admin not found" });
    }

    // Attach to request
    req.user = user || null;
    req.admin = admin || null;

    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(401).json({ error: "Token expired or invalid" });
  }
};

// 🔐 Protect admin-only routes
export const protect = (req, res, next) => {
  if (!req.admin) {
    return res.status(403).json({ error: "Forbidden: Admin access only" });
  }
  next();
};

// Optional: Protect user-only routes
export const protectUser = (req, res, next) => {
  if (!req.user) {
    return res.status(403).json({ error: "Forbidden: User access only" });
  }
  next();
};

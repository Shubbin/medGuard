import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import Admin from "../models/admin.models.js";

export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer "))
    return res.status(401).json({ error: "Not authorized" });

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    res.status(401).json({ error: "Token failed or expired" });
  }
};

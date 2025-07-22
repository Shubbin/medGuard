
import { User } from "../models/user.model.js";

export const updateUserRole = async (req, res) => {
  const { userId, newRole } = req.body;

  if (!["user", "sub-admin", "admin"].includes(newRole)) {
    return res.status(400).json({ success: false, message: "Invalid role" });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    user.role = newRole;
    await user.save();

    res.status(200).json({
      success: true,
      message: `Role updated to ${newRole}`,
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // exclude password
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

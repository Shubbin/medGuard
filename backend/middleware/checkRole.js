// middleware/checkRole.js
export const checkRole = (...allowedRoles) => {
  return (req, res, next) => {
    const user = req.user; // Assuming user is set in req by authentication middleware

    if (!user || !allowedRoles.includes(user.role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Insufficient role privileges",
      });
    }

    next();
  };
};

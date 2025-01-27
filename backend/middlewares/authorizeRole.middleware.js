const AppError = require("../utils/appError");

// Middleware to check for specific roles
const authorizeRole = (roles) => (req, res, next) => {
  if (!req.user) {
    throw new AppError(
      "You are not logged in! Please log in to get access",
      401
    );
  }

  if (!roles.includes(req.user.role)) {
    throw new AppError("Access denied. Insufficient permissions.", 403);
  }

  next();
};

module.exports = authorizeRole;

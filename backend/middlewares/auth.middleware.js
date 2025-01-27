const jwt = require("jsonwebtoken");
const db = require("../models");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Middleware to authenticate the JWT
const authenticateJWT = catchAsync(async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return next(new AppError("No token provided. Please login again.", 401));
  }

  try {
    // Verify the JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the user from the database
    const user = await db.User.findByPk(decoded.id, {
      attributes: ["userId", "firstName", "lastName", "email", "role"], // Fetch only required fields
    });

    if (!user) {
      return next(new AppError("Access denied, User not found.", 404));
    }

    // Attach the user to the request object
    req.user = user;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      throw new AppError("Token has expired. Please login again.", 401);
    }
    if (err.name === "JsonWebTokenError") {
      throw new AppError("Invalid token. Please login again.", 401);
    }
    next(err);
  }
});

module.exports = authenticateJWT;

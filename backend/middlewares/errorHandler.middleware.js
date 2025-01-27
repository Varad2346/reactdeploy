const { ZodError } = require("zod");

const errorHandler = (err, req, res, next) => {
  // Check if the error is a Zod validation error
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      errors: err.errors.map((error) => ({
        path: error.path.join("."),
        message: error.message,
      })),
    });
  }

  // For other errors, fallback to default handling
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : "Internal Server Error";

  if (process.env.NODE_ENV === "development") {
    console.error("Error:", err);
    console.error("Stack:", err.stack); // Log stack trace for debugging
  }

  res.status(statusCode).json({
    success: false,
    message: message,
  });
};

module.exports = errorHandler;

const { z } = require("zod");
const catchAsync = require("../utils/catchAsync");

// Schema for User Registration
const registerSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters long")
    .max(30, "First name must be at most 30 characters long"),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters long")
    .max(30, "Last name must be at most 30 characters long"),

  email: z.string().trim().email("Invalid email address"),

  mobileNumber: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Mobile number must be exactly 10 digits"),

  password: z
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be at most 20 characters long"),

  role: z
    .string()
    .refine(
      (role) => ["admin", "hr", "hod", "employee", "trainer"].includes(role),
      "Invalid role; must be one of: admin, hr, hod, employee, trainer"
    ),
});

// Schema for Login
const loginSchema = z.object({
  email: z.string().trim().email("Invalid email address"),
  password: z
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be at most 20 characters long"),
});

// Middleware for validating registration
const validateRegister = catchAsync(async (req, res, next) => {
  await registerSchema.parse(req.body);
  next();
});

// Middleware for validating login
const validateLogin = catchAsync(async (req, res, next) => {
  await loginSchema.parse(req.body);
  next();
});

// Export middleware
module.exports = {
  validateRegister,
  validateLogin,
};

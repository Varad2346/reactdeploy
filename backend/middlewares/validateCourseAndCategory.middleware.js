const { z } = require("zod");
const catchAsync = require("../utils/catchAsync");

// Define the schema for course category validation
const courseAndCategorySchema = z.object({
  name: z.string().min(1, "Category name is required.").trim(),
  description: z.string().optional(),
});

// Middleware to validate the course category
const validateCourseAndCategory = catchAsync(async (req, res, next) => {
  await courseAndCategorySchema.parse(req.body);
  next();
});

module.exports = validateCourseAndCategory;

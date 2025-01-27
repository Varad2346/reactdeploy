const express = require("express");
const router = express.Router();
const courseCategoryController = require("../controllers/courseCategory.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const authorizeRole = require("../middlewares/authorizeRole.middleware");
const validateCourseCategory = require("../middlewares/validateCourseAndCategory.middleware");

router.post(
  "/",
  authMiddleware,
  authorizeRole(["admin", "hr"]), // Ensures only admin and hr can create
  validateCourseCategory, // Validates input data
  courseCategoryController.createCourseCategoryController
);

router.get(
  "/",
  authMiddleware,
  courseCategoryController.getCourseCategoriesController
);

router.get(
  "/:id",
  authMiddleware,
  courseCategoryController.getCourseCategoryByIdController
);

router.put(
  "/:id",
  authMiddleware,
  authorizeRole(["admin", "hr"]),
  validateCourseCategory,
  courseCategoryController.updateCourseCategoryController
);

router.delete(
  "/:id",
  authMiddleware,
  authorizeRole(["admin", "hr"]),
  courseCategoryController.deleteCourseCategoryController
);

module.exports = router;

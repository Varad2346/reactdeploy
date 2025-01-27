const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");
const authenticateJWT = require("../middlewares/auth.middleware");
const validateCourse = require("../middlewares/validateCourseAndCategory.middleware");
const authorizeRole = require("../middlewares/authorizeRole.middleware");

// Create a new course in a specific category
router.post(
  "/:categoryId",
  authenticateJWT,
  validateCourse,
  authorizeRole(["admin", "hr"]),
  courseController.createCourseController
);

// Get all courses in a specific category
router.get(
  "/:categoryId",
  authenticateJWT,
  courseController.getCoursesController
);

// Get details of a specific course by its ID
router.get(
  "/courseId/:courseId",
  authenticateJWT,
  courseController.getCourseByIdController
);

// Update a specific course by its ID
router.put(
  "/courseId/:courseId",
  authenticateJWT,
  authorizeRole(["admin", "hr"]),
  courseController.updateCourseController
);

// Delete a specific course by its ID (soft delete)
router.delete(
  "/:courseId",
  authenticateJWT,
  authorizeRole(["admin", "hr"]),
  courseController.deleteCourseController
);

module.exports = router;

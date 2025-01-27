const express = require("express");
const router = express.Router();
const authenticateJWT = require("../middlewares/auth.middleware");
const authorizeRole = require("../middlewares/authorizeRole.middleware");
const {
  createPlannedCourse,
  getSinglePlannedCourse,
  getAllPlannedCourses,
  updatePlannedCourse,
  deletePlannedCourse,
} = require("../controllers/plannedCourse.controller");

router
  .route("/")
  .post(authenticateJWT, authorizeRole(["admin", "hr"]), createPlannedCourse)
  .get(
    authenticateJWT,
    authorizeRole(["admin", "hr", "hod"]),
    getAllPlannedCourses
  );

router
  .route("/:id")
  .get(
    authenticateJWT,
    authorizeRole(["admin", "hr", "hod"]),
    getSinglePlannedCourse
  )
  .put(authenticateJWT, authorizeRole(["admin", "hr"]), updatePlannedCourse)
  .delete(authenticateJWT, authorizeRole(["admin", "hr"]), deletePlannedCourse);

module.exports = router;

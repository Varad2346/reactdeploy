const express = require("express");
const router = express.Router();
const authenticateJWT = require("../middlewares/auth.middleware");
const authorizeRole = require("../middlewares/authorizeRole.middleware");
const {
  createEnrollment,
  getSingleEnrollment,
  getAllEnrollments,
  updateEnrollment,
  deleteEnrollment,
} = require("../controllers/enrollment.controller");

router
  .route("/")
  .post(authenticateJWT, authorizeRole(["admin", "hr"]), createEnrollment)
  .get(
    authenticateJWT,
    authorizeRole(["admin", "hr", "hod"]),
    getAllEnrollments
  );

router
  .route("/:id")
  .get(
    authenticateJWT,
    authorizeRole(["admin", "hr", "hod"]),
    getSingleEnrollment
  )
  .put(authenticateJWT, authorizeRole(["admin", "hr", "hod"]), updateEnrollment)
  .delete(authenticateJWT, authorizeRole(["admin", "hr"]), deleteEnrollment);

module.exports = router;

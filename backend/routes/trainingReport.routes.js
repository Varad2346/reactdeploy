const express = require("express");
const router = express.Router();
const authenticateJWT = require("../middlewares/auth.middleware");
const authorizeRole = require("../middlewares/authorizeRole.middleware");
const {
  createReport,
  getSingleReport,
  getAllReports,
  updateReport,
  deleteReport,
} = require("../controllers/trainingReport.controller");

router
  .route("/")
  .post(authenticateJWT, authorizeRole(["admin", "hr"]), createReport)
  .get(authenticateJWT, authorizeRole(["admin", "hr", "hod"]), getAllReports);

router
  .route("/:id")
  .get(authenticateJWT, authorizeRole(["admin", "hr", "hod"]), getSingleReport)
  .put(authenticateJWT, authorizeRole(["admin", "hr"]), updateReport)
  .delete(authenticateJWT, authorizeRole(["admin", "hr"]), deleteReport);

module.exports = router;

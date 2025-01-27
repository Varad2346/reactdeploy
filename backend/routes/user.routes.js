const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authenticateJWT = require("../middlewares/auth.middleware");
const authorizeRole = require("../middlewares/authorizeRole.middleware"); // Role-based middleware
const createUserAuthorization = require("../middlewares/createUserAuthorization.middleware");
const { validateRegister } = require("../middlewares/validation.middleware");

router.post(
  "/",
  authenticateJWT,
  validateRegister,
  authorizeRole(["admin", "hr"]), // Only admin or HR can create users
  createUserAuthorization, // Ensure HR can only create employee/trainer
  userController.createUser
);

router.get(
  "/",
  authenticateJWT,
  authorizeRole(["admin", "hr", "hod"]), // Restrict access to privileged roles
  userController.getUsers
);

router.get(
  "/:userId",
  authenticateJWT,
  authorizeRole(["admin", "hr", "hod", "employee", "trainer"]), // Allow basic users to view their own data
  userController.getUserById
);

router.put(
  "/:userId",
  authenticateJWT,
  authorizeRole(["admin", "hr", "hod"]), // Privileged roles can update user info
  userController.updateUser
);

router.delete(
  "/:userId",
  authenticateJWT,
  authorizeRole(["admin", "hr"]), // Only admin or HR can delete users
  userController.deleteUser
);

module.exports = router;

const express = require("express");
const router = express.Router();
const userCourseController = require("../controllers/userCourse.controller");

router.post("/", userCourseController.enrollUserInCourse);
router.get("/user/:userId", userCourseController.getUserCourses);
router.get("/course/:courseId", userCourseController.getCourseUsers);
router.delete("/:userId/:courseId", userCourseController.removeUserFromCourse);

router.put(
  "/:userId/:courseId/participant-status",
  userCourseController.updateParticipantStatus
);
router.put(
  "/:userId/:courseId/training-feedback",
  userCourseController.updateTrainingFeedback
);

module.exports = router;

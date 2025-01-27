// src/controllers/userCourse.controller.js
const UserCourseDao = require("../services/userCourse.service");
const constants = require("../constants");

const enrollUserInCourse = async (req, res) => {
  const { userId, courseId, training_duration, planned_date, course_status } =
    req.body;

  const enrollmentData = {
    userId,
    courseId,
    training_duration,
    planned_date,
    course_status,
  };

  try {
    const userCourse = await UserCourseDao.enrollUserInCourse(enrollmentData);
    res.status(201).json(userCourse);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(409).json("User is already enrolled in the course.");
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

const getUserCourses = async (req, res) => {
  const { userId } = req.params;

  try {
    const userCourses = await UserCourseDao.getUserCourses(userId);
    res.status(200).json(userCourses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCourseUsers = async (req, res) => {
  const { courseId } = req.params;

  try {
    const courseUsers = await UserCourseDao.getCourseUsers(courseId);
    res.status(200).json(courseUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeUserFromCourse = async (req, res) => {
  const { userId, courseId } = req.params;

  try {
    await UserCourseDao.removeUserFromCourse(userId, courseId);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateParticipantStatus = async (req, res) => {
  const { userId, courseId } = req.params;
  const { participant_status } = req.body;

  if (!participant_status) {
    return res.status(400).json({
      message: "Participant status is required.",
    });
  }

  try {
    const updatedUserCourse = await UserCourseDao.updateParticipantStatus(
      userId,
      courseId,
      participant_status
    );
    res.status(200).json(updatedUserCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTrainingFeedback = async (req, res) => {
  const { userId, courseId } = req.params;
  const { trainingFeedback } = req.body;

  if (
    trainingFeedback === undefined ||
    trainingFeedback < 1 ||
    trainingFeedback > 10
  ) {
    return res.status(400).json({
      message: "Training feedback must be between 1 and 10.",
    });
  }

  try {
    const updatedUserCourse = await UserCourseDao.updateTrainingFeedback(
      userId,
      courseId,
      trainingFeedback
    );
    res.status(200).json(updatedUserCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  enrollUserInCourse,
  getUserCourses,
  getCourseUsers,
  removeUserFromCourse,
  updateParticipantStatus,
  updateTrainingFeedback,
};

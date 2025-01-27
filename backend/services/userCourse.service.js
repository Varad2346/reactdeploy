// src/daos/userCourse.dao.js
const db = require("../config/database");
const constants = require("../constants");

const UserCourseDao = {
  enrollUserInCourse: async (enrollmentData) => {
    return await db.UserCourse.create(enrollmentData);
  },

  getUserCourses: async (userId) => {
    return await db.User.findAll({
      where: { userId },
      include: [{ model: db.Course }],
    });
  },

  getCourseUsers: async (courseId) => {
    return await db.Course.findAll({
      where: { courseId },
      include: [{ model: db.User }],
    });
  },

  removeUserFromCourse: async (userId, courseId) => {
    const userCourse = await db.UserCourse.findOne({
      where: { userId, courseId },
    });
    if (!userCourse) {
      throw new Error(constants.ERROR_USER_COURSE_ASSOCIATION_NOT_FOUND);
    }
    await userCourse.destroy();
  },

  updateParticipantStatus: async (userId, courseId, participant_status) => {
    const userCourse = await db.UserCourse.findOne({
      where: { userId, courseId },
    });

    if (!userCourse) {
      throw new Error(constants.ERROR_USER_COURSE_ASSOCIATION_NOT_FOUND);
    }

    userCourse.participant_status = participant_status;
    await userCourse.save();
    return userCourse;
  },

  updateTrainingFeedback: async (userId, courseId, trainingFeedback) => {
    const userCourse = await db.UserCourse.findOne({
      where: { userId, courseId },
    });

    if (!userCourse) {
      throw new Error(constants.ERROR_USER_COURSE_ASSOCIATION_NOT_FOUND);
    }

    userCourse.trainingFeedback = trainingFeedback;
    await userCourse.save();
    return userCourse;
  },
};

module.exports = UserCourseDao;

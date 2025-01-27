const { Course, User } = require("../models");

const getCourseByNameAndCategoryDAO = async (name, categoryId) => {
  return await Course.findOne({
    where: {
      name,
      categoryId,
    },
  });
};

const createCourseDAO = async (courseData) => {
  return await Course.create(courseData);
};

const getAllCoursesDAO = async (categoryId) => {
  return await Course.findAll({
    where: {
      categoryId,
    },
    paranoid: true, // Include soft-deleted records
    include: [
      {
        model: User,
        as: "trainer",
      },
      {
        model: User,
        as: "creator",
      },
    ],
  });
};

const getActiveCoursesDAO = async (categoryId) => {
  return await Course.findAll({
    where: {
      categoryId,
    },
    include: [
      {
        model: User,
        as: "trainer",
      },
      {
        model: User,
        as: "creator",
      },
    ],
  });
};

const getCourseByIdDAO = async (courseId) => {
  return await Course.findOne({
    paranoid: false,
    where: {
      courseId,
    },
    include: [
      {
        model: User,
        as: "trainer",
      },
      {
        model: User,
        as: "creator",
      },
    ],
  });
};

const updateCourseDAO = async (courseId, courseData) => {
  return await Course.update(courseData, {
    where: {
      courseId,
    },
  });
};

const deleteCourseDAO = async (courseId) => {
  return await Course.destroy({
    where: {
      courseId,
    },
  });
};

module.exports = {
  getCourseByNameAndCategoryDAO,
  createCourseDAO,
  getAllCoursesDAO,
  getActiveCoursesDAO,
  getCourseByIdDAO,
  updateCourseDAO,
  deleteCourseDAO,
};

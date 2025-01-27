const { CourseCategory, Course, User } = require("../models");

const createCourseCategoryDAO = async (courseCategoryData) => {
  return await CourseCategory.create(courseCategoryData);
};

const getAllCourseCategories = async () => {
  return await CourseCategory.findAll({
    paranoid: false, // Include soft-deleted records
    include: [
      {
        model: Course, // Include related courses
        as: "Courses",
      },
      {
        model: User, // Include related users
        as: "creator",
      },
    ],
  });
};

const getActiveCourseCategories = async () => {
  return await CourseCategory.findAll({
    include: [
      {
        model: Course,
        as: "Courses",
      },
      {
        model: User,
        as: "creator",
      },
    ],
  });
};

const getCourseCategoryByNameDAO = async (name) => {
  return await CourseCategory.findOne({
    where: {
      name: name,
    },
  });
};

const getCourseCategoryByIdDAO = async (id) => {
  return await CourseCategory.findByPk(id, {
    paranoid: false,
    include: [
      {
        model: Course,
        as: "Courses",
      },
      {
        model: User,
        as: "creator",
      },
    ],
  });
};

const updateCourseCategoryDAO = async (id, courseCategoryData) => {
  return await CourseCategory.update(courseCategoryData, {
    where: {
      categoryId: id,
    },
  });
};

const deleteCourseCategoryDAO = async (id) => {
  return await CourseCategory.destroy({
    where: {
      categoryId: id,
    },
  });
};

module.exports = {
  createCourseCategoryDAO,
  getAllCourseCategories,
  getActiveCourseCategories,
  getCourseCategoryByNameDAO,
  getCourseCategoryByIdDAO,
  updateCourseCategoryDAO,
  deleteCourseCategoryDAO,
};

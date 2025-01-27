const AppError = require("../utils/appError");
const { getTrainerById } = require("../daos/user.dao");
const { getCourseCategoryByIdDAO } = require("../daos/courseCategory.dao");
const {
  getCourseByNameAndCategoryDAO,
  createCourseDAO,
  getAllCoursesDAO,
  getActiveCoursesDAO,
  getCourseByIdDAO,
  updateCourseDAO,
  deleteCourseDAO,
} = require("../daos/course.dao");

const createCourseService = async (loggedInUser, categoryId, courseData) => {
  const { name, trainerId } = courseData;

  const trainer = await getTrainerById(trainerId);
  if (!trainer) {
    throw new AppError("Trainer not found", 400);
  }

  // Check if a course with the same name already exists in the specified category
  const existingCourse = await getCourseByNameAndCategoryDAO(name, categoryId);
  if (existingCourse) {
    throw new AppError(
      "Course with the same name already exists in this category",
      400
    );
  }

  courseData = {
    ...courseData,
    categoryId: categoryId,
    createdBy: loggedInUser.userId,
  };
  return await createCourseDAO(courseData);
};

const getCoursesService = async (categoryId, role) => {
  const category = await getCourseCategoryByIdDAO(categoryId);
  if (!category) {
    throw new AppError("Category not found", 404);
  } else if (role === "admin") {
    return (courses = await getAllCoursesDAO(categoryId));
  } else if (role === "hr" || role==="hod") {
    return (courses = await getActiveCoursesDAO(categoryId));
  }
};

const getCourseByIdService = async (courseId) => {
  const course = await getCourseByIdDAO(courseId);
  if (!course) {
    throw new AppError("Course not found", 404);
  }
  return course;
};

const updateCourseService = async (courseId, courseData) => {
  const { name, trainerId } = courseData;
  const course = await getCourseByIdDAO(courseId);
  if (!course) {
    throw new AppError("Course not found", 404);
  }

  const trainer = await getTrainerById(trainerId);
  if (!trainer) {
    throw new AppError("Trainer not found", 400);
  }

  const existingCourse = await getCourseByNameAndCategoryDAO(
    name,
    course.categoryId
  );
  if (existingCourse && existingCourse.id !== course.id) {
    throw new AppError(
      "Course with the same name already exists in this category",
      400
    );
  }
  return await updateCourseDAO(courseId, courseData);
};

const deleteCourseService = async (courseId) => {
  const course = await getCourseByIdDAO(courseId);
  if (!course) {
    throw new AppError("Course not found", 404);
  }

  return await deleteCourseDAO(courseId);
};

module.exports = {
  createCourseService,
  getCoursesService,
  getCourseByIdService,
  updateCourseService,
  deleteCourseService,
};

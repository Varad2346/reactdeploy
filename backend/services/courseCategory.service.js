const constants = require("../constants");
const AppError = require("../utils/appError");
const {
  createCourseCategoryDAO,
  getAllCourseCategories,
  getActiveCourseCategories,
  getCourseCategoryByNameDAO,
  getCourseCategoryByIdDAO,
  updateCourseCategoryDAO,
  deleteCourseCategoryDAO,
} = require("../daos/courseCategory.dao");

const createCourseCategoryService = async (
  loggedInUser,
  courseCategoryData
) => {
  const category = await getCourseCategoryByNameDAO(courseCategoryData.name);
  if (category) {
    throw new AppError("Category already exists", 400);
  }

  courseCategoryData = {
    ...courseCategoryData,
    createdBy: loggedInUser.userId,
  };
  return await createCourseCategoryDAO(courseCategoryData);
};

const getCourseCategoriesService = async (role) => {
  if (role === "admin") {
    return await getAllCourseCategories(); // Admins can see all categories, including soft-deleted
  } else if (role === "hr" || role==="hod"  ) {
    return await getActiveCourseCategories(); // HR can only see active categories
  } else {
    throw new AppError(constants.ERROR_ACCESS_DENIED, 403);
  }
};

const getCourseCategoryByIdService = async (courseCategoryId) => {
  const category = await getCourseCategoryByIdDAO(courseCategoryId);
  if (!category) {
    throw new AppError(constants.ERROR_CATEGORY_NOT_FOUND, 404);
  }
  return category;
};

const updateCourseCategoryService = async (
  courseCategoryId,
  courseCategoryData
) => {
  const category = await getCourseCategoryByIdDAO(courseCategoryId);
  if (!category) {
    throw new AppError(constants.ERROR_CATEGORY_NOT_FOUND, 404);
  }
  return await updateCourseCategoryDAO(courseCategoryId, courseCategoryData);
};

const deleteCourseCategoryService = async (courseCategoryId) => {
  const category = await getCourseCategoryByIdDAO(courseCategoryId);
  if (!category) {
    throw new AppError(constants.ERROR_CATEGORY_NOT_FOUND, 404);
  }
  return await deleteCourseCategoryDAO(courseCategoryId);
};

module.exports = {
  createCourseCategoryService,
  getCourseCategoriesService,
  getCourseCategoryByIdService,
  updateCourseCategoryService,
  deleteCourseCategoryService,
};

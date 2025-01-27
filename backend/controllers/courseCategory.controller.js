const constants = require("../constants");
const catchAsync = require("../utils/catchAsync");
const {
  createCourseCategoryService,
  getCourseCategoriesService,
  getCourseCategoryByIdService,
  updateCourseCategoryService,
  deleteCourseCategoryService,
} = require("../services/courseCategory.service");

const createCourseCategoryController = catchAsync(async (req, res) => {
  const courseCategory = await createCourseCategoryService(req.user, req.body);
  res.status(201).json({
    success: true,
    message: constants.SUCCESS_CATEGORY_CREATED,
    data: courseCategory,
  });
});

const getCourseCategoriesController = catchAsync(async (req, res) => {
  const courseCategories = await getCourseCategoriesService(req.user.role);
  res.status(200).json({
    success: true,
    message: constants.SUCCESS_CATEGORIES_FETCHED,
    data: courseCategories,
  });
});

const getCourseCategoryByIdController = catchAsync(async (req, res) => {
  const courseCategory = await getCourseCategoryByIdService(req.params.id);
  res.status(200).json({
    success: true,
    message: constants.SUCCESS_CATEGORY_FETCHED,
    data: courseCategory,
  });
});

const updateCourseCategoryController = catchAsync(async (req, res) => {
  const courseCategory = await updateCourseCategoryService(
    req.params.id,
    req.body
  );
  res.status(200).json({
    success: true,
    message: constants.SUCCESS_CATEGORY_UPDATED,
    data: courseCategory,
  });
});

const deleteCourseCategoryController = catchAsync(async (req, res) => {
  await deleteCourseCategoryService(req.params.id);
  res.status(200).json({
    success: true,
    message: constants.SUCCESS_CATEGORY_DELETED,
  });
});

module.exports = {
  createCourseCategoryController,
  getCourseCategoriesController,
  getCourseCategoryByIdController,
  updateCourseCategoryController,
  deleteCourseCategoryController,
};

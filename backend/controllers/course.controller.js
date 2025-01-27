const catchAsync = require("../utils/catchAsync");
const {
  createCourseService,
  getCoursesService,
  getCourseByIdService,
  updateCourseService,
  deleteCourseService,
} = require("../services/course.service");

const createCourseController = catchAsync(async (req, res) => {
  const course = await createCourseService(
    req.user,
    req.params.categoryId,
    req.body
  );
  res.status(201).json({
    success: true,
    message: "Course created successfully.",
    data: course,
  });
});

const getCoursesController = catchAsync(async (req, res) => {
  const courses = await getCoursesService(req.params.categoryId, req.user.role);
  res.status(200).json({
    success: true,
    message: "Courses retrieved successfully.",
    data: courses,
  });
});

const getCourseByIdController = catchAsync(async (req, res) => {
  const course = await getCourseByIdService(req.params.courseId);
  res.status(200).json({
    success: true,
    message: "Course retrieved successfully.",
    data: course,
  });
});

const updateCourseController = catchAsync(async (req, res) => {
  const course = await updateCourseService(req.params.courseId, req.body);
  res.status(200).json({
    success: true,
    message: "Course updated successfully.",
  });
});

const deleteCourseController = catchAsync(async (req, res) => {
  await deleteCourseService(req.params.courseId);
  res.status(200).json({
    success: true,
    message: "Course deleted successfully.",
  });
});

module.exports = {
  createCourseController,
  updateCourseController,
  getCoursesController,
  getCourseByIdController,
  deleteCourseController,
};

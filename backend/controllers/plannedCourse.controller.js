const {
  registerPlannedCourse,
  getPlannedCourse,
  listPlannedCourses,
  modifyPlannedCourse,
  removePlannedCourse,
} = require("../services/plannedCourse.service");
const catchAsync = require("../utils/catchAsync");

// Create Planned Course
const createPlannedCourse = catchAsync(async (req, res, next) => {
  const plannedCourse = await registerPlannedCourse(req.body);
  res.status(201).json({
    success: true,
    message: "Planned Course created successfully",
    data: plannedCourse,
  });
});

// Get Planned Course by ID
const getSinglePlannedCourse = catchAsync(async (req, res, next) => {
  const plannedCourse = await getPlannedCourse(req.params.id);
  res.status(200).json({
    success: true,
    message: "Planned Course retrieved successfully",
    data: plannedCourse,
  });
});

// Get All Planned Courses
const getAllPlannedCourses = catchAsync(async (req, res, next) => {
  const plannedCourses = await listPlannedCourses();
  res.status(200).json({
    success: true,
    message: "Planned Courses retrieved successfully",
    data: plannedCourses,
  });
});

// Update Planned Course
const updatePlannedCourse = catchAsync(async (req, res, next) => {
  const plannedCourse = await modifyPlannedCourse(req.params.id, req.body);
  res.status(200).json({
    success: true,
    message: "Planned Course updated successfully",
    data: plannedCourse,
  });
});

// Delete Planned Course
const deletePlannedCourse = catchAsync(async (req, res, next) => {
  await removePlannedCourse(req.params.id);
  res.status(204).json({
    success: true,
    message: "Planned Course deleted successfully",
    data: null,
  });
});

module.exports = {
  createPlannedCourse,
  getSinglePlannedCourse,
  getAllPlannedCourses,
  updatePlannedCourse,
  deletePlannedCourse,
};

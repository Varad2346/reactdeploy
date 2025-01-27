const {
  registerEnrollment,
  getEnrollment,
  listEnrollments,
  modifyEnrollment,
  removeEnrollment,
} = require("../services/enrollment.service");
const catchAsync = require("../utils/catchAsync");

// Create Enrollment
const createEnrollment = catchAsync(async (req, res, next) => {
  const enrollment = await registerEnrollment(req.body);
  res.status(201).json({
    success: true,
    message: "Enrollment created successfully",
    data: enrollment,
  });
});

// Get Enrollment by ID
const getSingleEnrollment = catchAsync(async (req, res, next) => {
  const enrollment = await getEnrollment(req.params.id);
  res.status(200).json({
    success: true,
    message: "Enrollment retrieved successfully",
    data: enrollment,
  });
});

// Get All Enrollments
const getAllEnrollments = catchAsync(async (req, res, next) => {
  const enrollments = await listEnrollments();
  res.status(200).json({
    success: true,
    message: "Enrollments retrieved successfully",
    data: enrollments,
  });
});

// Update Enrollment
const updateEnrollment = catchAsync(async (req, res, next) => {
  const enrollment = await modifyEnrollment(req.params.id, req.body);
  res.status(200).json({
    success: true,
    message: "Enrollment updated successfully",
    data: enrollment,
  });
});

// Delete Enrollment
const deleteEnrollment = catchAsync(async (req, res, next) => {
  await removeEnrollment(req.params.id);
  res.status(204).json({
    success: true,
    message: "Enrollment deleted successfully",
    data: null,
  });
});

module.exports = {
  createEnrollment,
  getSingleEnrollment,
  getAllEnrollments,
  updateEnrollment,
  deleteEnrollment,
};

const {
  createEnrollment,
  getEnrollmentById,
  getAllEnrollments,
  updateEnrollment,
  deleteEnrollment,
} = require("../daos/enrollment.dao");
const AppError = require("../utils/appError");

// Register a New Enrollment
const registerEnrollment = async (data) => {
  const enrollment = await createEnrollment(data);
  return enrollment;
};

// Get Enrollment by ID
const getEnrollment = async (enrollmentId) => {
  const enrollment = await getEnrollmentById(enrollmentId);
  if (!enrollment) {
    throw new AppError("Enrollment not found", 404);
  }
  return enrollment;
};

// List All Enrollments
const listEnrollments = async () => {
  return await getAllEnrollments();
};

// Update Enrollment
const modifyEnrollment = async (enrollmentId, updates) => {
  const updatedEnrollment = await updateEnrollment(enrollmentId, updates);
  if (!updatedEnrollment) {
    throw new AppError("Unable to update, Enrollment not found", 404);
  }
  return updatedEnrollment;
};

// Delete Enrollment
const removeEnrollment = async (enrollmentId) => {
  const deletedEnrollment = await deleteEnrollment(enrollmentId);
  if (!deletedEnrollment) {
    throw new AppError("Enrollment not found", 404);
  }
  return deletedEnrollment;
};

module.exports = {
  registerEnrollment,
  getEnrollment,
  listEnrollments,
  modifyEnrollment,
  removeEnrollment,
};

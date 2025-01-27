const { Enrollment } = require("../models");

// Create Enrollment
const createEnrollment = async (enrollmentData) => {
  return await Enrollment.create(enrollmentData);
};

// Get Enrollment by ID
const getEnrollmentById = async (enrollmentId) => {
  return await Enrollment.findByPk(enrollmentId);
};

// Get All Enrollments
const getAllEnrollments = async () => {
  return await Enrollment.findAll();
};

// Update Enrollment
const updateEnrollment = async (enrollmentId, updates) => {
  const enrollment = await getEnrollmentById(enrollmentId);
  if (!enrollment) return null;

  return await enrollment.update(updates);
};

// Delete Enrollment
const deleteEnrollment = async (enrollmentId) => {
  const enrollment = await getEnrollmentById(enrollmentId);
  if (!enrollment) return null;

  await enrollment.destroy();
  return enrollment;
};

module.exports = {
  createEnrollment,
  getEnrollmentById,
  getAllEnrollments,
  updateEnrollment,
  deleteEnrollment,
};

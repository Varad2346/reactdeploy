const {
  createPlannedCourse,
  getPlannedCourseById,
  getAllPlannedCourses,
  updatePlannedCourse,
  deletePlannedCourse,
} = require("../daos/plannedCourse.dao");
const AppError = require("../utils/appError");

// Register a New Planned Course
const registerPlannedCourse = async (data) => {
  const plannedCourse = await createPlannedCourse(data);
  return plannedCourse;
};

// Get Planned Course by ID
const getPlannedCourse = async (plannedCourseId) => {
  const plannedCourse = await getPlannedCourseById(plannedCourseId);
  if (!plannedCourse) {
    throw new AppError("Planned Course not found", 404);
  }
  return plannedCourse;
};

// List All Planned Courses
const listPlannedCourses = async () => {
  return await getAllPlannedCourses();
};

// Update Planned Course
const modifyPlannedCourse = async (plannedCourseId, updates) => {
  const updatedCourse = await updatePlannedCourse(plannedCourseId, updates);
  if (!updatedCourse) {
    throw new AppError("Unable to update, Planned Course not found", 404);
  }
  return updatedCourse;
};

// Delete Planned Course
const removePlannedCourse = async (plannedCourseId) => {
  const deletedCourse = await deletePlannedCourse(plannedCourseId);
  if (!deletedCourse) {
    throw new AppError("Planned Course not found", 404);
  }
  return deletedCourse;
};

module.exports = {
  registerPlannedCourse,
  getPlannedCourse,
  listPlannedCourses,
  modifyPlannedCourse,
  removePlannedCourse,
};

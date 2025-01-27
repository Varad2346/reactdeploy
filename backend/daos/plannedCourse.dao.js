const { PlannedCourse } = require("../models");

// Create Planned Course
const createPlannedCourse = async (plannedCourseData) => {
  return await PlannedCourse.create(plannedCourseData);
};

// Get Planned Course by ID
const getPlannedCourseById = async (plannedCourseId) => {
  return await PlannedCourse.findByPk(plannedCourseId);
};

// Get All Planned Courses
const getAllPlannedCourses = async () => {
  return await PlannedCourse.findAll();
};

// Update Planned Course
const updatePlannedCourse = async (plannedCourseId, updates) => {
  const plannedCourse = await getPlannedCourseById(plannedCourseId);
  if (!plannedCourse) return null;

  return await plannedCourse.update(updates);
};

// Delete Planned Course (Soft Delete)
const deletePlannedCourse = async (plannedCourseId) => {
  const plannedCourse = await getPlannedCourseById(plannedCourseId);
  if (!plannedCourse) return null;

  await plannedCourse.destroy();
  return plannedCourse;
};

module.exports = {
  createPlannedCourse,
  getPlannedCourseById,
  getAllPlannedCourses,
  updatePlannedCourse,
  deletePlannedCourse,
};

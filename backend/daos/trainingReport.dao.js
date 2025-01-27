const { TrainingReport } = require("../models");

// Create Training Report
const createReport = async (reportData) => {
  return await TrainingReport.create(reportData);
};

// Get Training Report by ID
const getReportById = async (reportId) => {
  return await TrainingReport.findByPk(reportId);
};

// Get All Reports
const getAllReports = async () => {
  return await TrainingReport.findAll();
};

// Update Training Report
const updateReport = async (reportId, updates) => {
  const report = await getReportById(reportId);
  if (!report) return null;

  return await report.update(updates);
};

// Delete Training Report
const deleteReport = async (reportId) => {
  const report = await getReportById(reportId);
  if (!report) return null;

  await report.destroy();
  return report;
};

module.exports = {
  createReport,
  getReportById,
  getAllReports,
  updateReport,
  deleteReport,
};

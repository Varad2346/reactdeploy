const {
  createReport,
  getReportById,
  getAllReports,
  updateReport,
  deleteReport,
} = require("../daos/trainingReport.dao");
const AppError = require("../utils/appError");

// Create New Training Report
const registerReport = async (data) => {
  const report = await createReport(data);
  return report;
};

// Get Training Report by ID
const getReport = async (reportId) => {
  const report = await getReportById(reportId);
  if (!report) {
    throw new AppError("Training Report not found", 404);
  }
  return report;
};

// List All Reports
const listReports = async () => {
  return await getAllReports();
};

// Update Training Report
const modifyReport = async (reportId, updates) => {
  const updatedReport = await updateReport(reportId, updates);
  if (!updatedReport) {
    throw new AppError("Unable to update, Training Report not found", 404);
  }
  return updatedReport;
};

// Delete Training Report
const removeReport = async (reportId) => {
  const deletedReport = await deleteReport(reportId);
  if (!deletedReport) {
    throw new AppError("Training Report not found", 404);
  }
  return deletedReport;
};

module.exports = {
  registerReport,
  getReport,
  listReports,
  modifyReport,
  removeReport,
};

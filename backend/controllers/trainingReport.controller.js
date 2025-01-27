const {
  registerReport,
  getReport,
  listReports,
  modifyReport,
  removeReport,
} = require("../services/trainingReport.service");
const catchAsync = require("../utils/catchAsync");

// Create Training Report
const createReport = catchAsync(async (req, res, next) => {
  const report = await registerReport(req.body);
  res.status(201).json({
    success: true,
    message: "Training Report created successfully",
    data: report,
  });
});

// Get Report by ID
const getSingleReport = catchAsync(async (req, res, next) => {
  const report = await getReport(req.params.id);
  res.status(200).json({
    success: true,
    message: "Reports retrieved successfully",
    data: report,
  });
});

// Get All Reports
const getAllReports = catchAsync(async (req, res, next) => {
  const reports = await listReports();
  res.status(200).json({
    success: true,
    message: "Report retrieved successfully",
    data: reports,
  });
});

// Update Report
const updateReport = catchAsync(async (req, res, next) => {
  const report = await modifyReport(req.params.id, req.body);
  res.status(200).json({
    success: true,
    message: "Training Report updated successfully",
    data: report,
  });
});

// Delete Report
const deleteReport = catchAsync(async (req, res, next) => {
  await removeReport(req.params.id);
  res.status(204).json({
    success: true,
    message: "Training Report deleted successfully",
    data: null,
  });
});

module.exports = {
  createReport,
  getSingleReport,
  getAllReports,
  updateReport,
  deleteReport,
};

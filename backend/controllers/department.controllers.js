const {
  createDepartment,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
  getDepartments,
} = require("../services/department.services");

module.exports = {
  createDepartment: (req, res) => {
    const body = req.body;
    createDepartment(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  getDepartmentById: (req, res) => {
    console.log("getdaprtmentbyid");
    const id = req.params.id;
    getDepartmentById(id, (err, results) => {
      if (err) {
        console.log(err);
      }

      if (!results) {
        return res.json({
          success: 0,
          message: "record not found",
        });
      }

      return res.json({
        success: 1,
        message: results,
      });
    });
  },

  getDepartments: (req, res) => {
    console.log("getdaprtments");
    getDepartments((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      return res.status(200).json({
        success: 1,
        message: results,
      });
    });
  },

  updateDepartment: (req, res) => {
    const body = req.body;
    updateDepartment(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      return res.json({
        success: 1,
        message: "updates successfully",
      });
    });
  },

  deleteDepartment: (req, res) => {
    const id = req.body.id; // Assuming id is passed in the body
    deleteDepartment(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      return res.status(204).json({
        success: 1,
        message: "department deleted successfully",
      });
    });
  },
};

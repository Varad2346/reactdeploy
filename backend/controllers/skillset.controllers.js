const {
  createSkillSet,
  getSkillSets,
  updateSkillSet,
  deleteSkillSet,
  getSkillSetById,
  getAllSkillSetByUserId,
} = require("../services/skillset.services");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
module.exports = {
  createSkillSet: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10); // Corrected function name to genSaltSync
    body.password = hashSync(body.password, salt); // Corrected function name to hashSync
    createSkillSet(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1, // Changed to 1 for success
        data: results,
      });
    });
  },

  getSkillSetById: (req, res) => {
    const id = req.params.id;
    getSkillSetById(id, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "SkillSet record not found",
        });
      }
      return res.json({
        success: 1,
        message: results,
      });
    });
  },

  getSkillSets: (req, res) => {
    getSkillSets((err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      return res.json({
        success: 1,
        message: results,
      });
    });
  },

  updateSkillSet: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10); // Corrected function name to genSaltSync
    body.password = hashSync(body.password, salt); // Corrected function name to hashSync
    updateSkillSet(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },

  deleteSkillSet: (req, res) => {
    const id = req.body;
    deleteSkillSet(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found",
        });
      }
      return res.json({
        success: 1,
        message: "SkillSet deleted successfully",
      });
    });
  },

  getAllSkillSetByUserId: (req, res) => {
    const userId = req.params.departmentId;
    getAllSkillSetByUserId(userId, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "No Skillset found for the department ID",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};

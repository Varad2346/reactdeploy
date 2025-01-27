const {
  createAchievement,
  getAchievementById,
  updateAchievement,
  deleteAchievement,
  getAchievements,
} = require("../services/achievements.services");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");

module.exports = {
  
  createAchievement: (req, res) => {
    console.log("create achivements");
    const body = req.body;
    // const salt = genSaltSync(10); // Generate salt
    // body.password = hashSync(body.password, salt); // Hash password
    createAchievement(body, (err, results) => {
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

  getAchievementById: (req, res) => {
    const id = req.params.id;
    getAchievementById(id, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        message: results,
      });
    });
  },

  getAchievements: (req, res) => {
    getAchievements((err, results) => {
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

  updateAchievement: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10); // Generate salt
    // body.password = hashSync(body.password, salt); // Hash password
    updateAchievement(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "Updated successfully",
      });
    });
  },

  deleteAchievement: (req, res) => {
    const id = req.body.id; // Corrected to req.body.id
    deleteAchievement(id, (err, results) => {
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
          message: "Record not found",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "Deleted successfully",
      });
    });
  },
};

const{
    createAchievement,
    getAchievementById,
    updateAchievement,
    deleteAchievement,
    getAchievements
}= require("../model/notes.dao");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
module.exports = {
    createAchievement: (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10); // Corrected function name to genSaltSync
      body.password = hashSync(body.password, salt); // Corrected function name to hashSync
      createAchievement(body, (err, results) => {
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

    getAchievementById: (req, res) => {
        const id = req.params.id;
        getAchievementById(id, (err, results) => {
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
    
      getAchievements: (req, res) => {
        getAchievements((err, results) => {
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

      updateAchievement: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10); // Corrected function name to genSaltSync
        body.password = hashSync(body.password, salt); // Corrected function name to hashSync
        updateAchievement(body, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            message: "updates successfully",
          });
        });
      },

      deleteAchievement: (req, res) => {
        const id = req.body;
        deleteAchievement(data, (err, results) => {
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
            message: "user deleted successfully",
          });
        });
      },
}
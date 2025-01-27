const pool = require("../../config/database");

module.exports = {
  getAllSkillSetByUserId: (userId, callback) => {
    pool.query(
      `SELECT Id, user_id, skill, percentage, status FROM SkillSet WHERE user_id = ?`,
      [userId],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  //---------------------
  createSkillSet: (data, callback) => {
    pool.query(
      "INSERT INTO skill_set (user_id, skill, percentage, status, created_on, created_by) VALUES (?, ?, ?, ?, ?, ?)",
      [
        data.user_id,
        data.skill,
        data.percentage,
        data.status,
        data.created_on,
        data.created_by,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getSkillSets: (callback) => {
    pool.query(
      `SELECT Id, user_id, skill, percentage, status FROM skill_set`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getSkillSetById: (id, callback) => {
    pool.query(
      `SELECT Id, user_id, skill, percentage, status FROM skill_set WHERE Id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateSkillSet: (data, callback) => {
    pool.query(
      "UPDATE skill_set SET user_id = ?, skill = ?, percentage = ?, status = ?, updated_on = ?, updated_by = ? WHERE Id = ?",
      [
        data.user_id,
        data.skill,
        data.percentage,
        data.status,
        data.updated_on,
        data.updated_by,
        data.Id,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },

  deleteSkillSet: (id, callback) => {
    pool.query(
      `DELETE FROM skill_set WHERE Id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};

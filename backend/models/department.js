const pool = require("../../config/database");

module.exports = {
  createDepartment: (data, callback) => {
    const { department_name, image_url, status, created_by } = data;
    pool.query(
      "INSERT INTO department (department_name, image_url, status, created_by) VALUES (?, ?, ?, ?)",
      [department_name, image_url, status, created_by],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getDepartments: (callback) => {
    pool.query(
      "SELECT departmentId, department_name, image_url, status FROM department",
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getDepartmentById: (id, callback) => {
    pool.query(
      "SELECT departmentId, department_name, image_url, status FROM department WHERE departmentId = ?",
      [id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },

  updateDepartment: (data, callback) => {
    const {
      department_name,
      image_url,
      status,
      updated_on,
      updated_by,
      departmentId,
    } = data;
    pool.query(
      "UPDATE department SET department_name = ?, image_url = ?, status = ?, updated_on = ?, updated_by = ? WHERE departmentId = ?",
      [
        department_name,
        image_url,
        status,
        updated_on,
        updated_by,
        departmentId,
      ],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },

  deleteDepartment: (id, callback) => {
    pool.query(
      "DELETE FROM department WHERE departmentId = ?",
      [id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};

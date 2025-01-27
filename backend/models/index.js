const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const defineAssociations = require("./associations");

const User = require("./User")(sequelize, DataTypes);
const Course = require("./Course")(sequelize, DataTypes);
const CourseCategory = require("./CourseCategory")(sequelize, DataTypes);
const PlannedCourse = require("./PlannedCourse")(sequelize, DataTypes);
const Enrollment = require("./Enrollment")(sequelize, DataTypes);
const TrainingReport = require("./TrainingReport")(sequelize, DataTypes);
const TrainingEvaluation = require("./TrainingEvaluation")(
  sequelize,
  DataTypes
);

// Export models
const db = {
  sequelize,
  User,
  Course,
  CourseCategory,
  PlannedCourse,
  Enrollment,
  TrainingReport,
  TrainingEvaluation,
};

defineAssociations(db);

module.exports = db;

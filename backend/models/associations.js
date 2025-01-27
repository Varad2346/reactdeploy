const defineAssociations = (db) => {
  const {
    User,
    Course,
    CourseCategory,
    PlannedCourse,
    Enrollment,
    TrainingReport,
    TrainingEvaluation,
  } = db;

  // A user can enroll in multiple courses via enrollments
  User.hasMany(Enrollment, { foreignKey: "userId" });
  Enrollment.belongsTo(User, { foreignKey: "userId" });

  // A user can be a trainer for multiple courses
  User.hasMany(Course, { foreignKey: "trainerId" });
  Course.belongsTo(User, { foreignKey: "trainerId", as: "trainer" });

  // A user can be a creator of multiple courses
  User.hasMany(Course, { foreignKey: "createdBy" });
  Course.belongsTo(User, { foreignKey: "createdBy", as: "creator" });

  // A user can be a creator of multiple CourseCategory
  User.hasMany(CourseCategory, { foreignKey: "createdBy" });
  CourseCategory.belongsTo(User, {
    foreignKey: "createdBy",
    as: "creator",
  });

  // One CourseCategory has many Courses
  CourseCategory.hasMany(Course, {
    foreignKey: "categoryId",
  });
  Course.belongsTo(CourseCategory, { foreignKey: "categoryId" });

  // One Course has many PlannedCourses
  Course.hasMany(PlannedCourse, { foreignKey: "courseId" });
  PlannedCourse.belongsTo(Course, { foreignKey: "courseId" });

  // One PlannedCourse has many Enrollments
  PlannedCourse.hasMany(Enrollment, { foreignKey: "plannedCourseId" });
  Enrollment.belongsTo(PlannedCourse, {
    foreignKey: "plannedCourseId",
  });

  // One Enrollment has one TrainingReport
  Enrollment.belongsTo(TrainingReport, { foreignKey: "reportId" });
  TrainingReport.hasOne(Enrollment, { foreignKey: "reportId" });

  //
  Enrollment.belongsTo(TrainingEvaluation, {
    foreignKey: "evaluationId",
  });
  TrainingEvaluation.hasOne(Enrollment, {
    foreignKey: "evaluationId",
  });
};

module.exports = defineAssociations;

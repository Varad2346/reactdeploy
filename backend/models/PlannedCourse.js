const PlannedCourse = (sequelize, DataTypes) => {
  return sequelize.define(
    "PlannedCourse",
    {
      plannedCourseId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      courseId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Courses",
          key: "courseId",
        },
      },
      trainingDuration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      plannedDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        values: ["pending", "completed"],
        defaultValue: "pending",
        allowNull: false,
      },
      remark:{
        type:DataTypes.STRING,
        default:"NA",
        allowNull:true
      }
    },
    {
      paranoid: true,
      timestamps: true,
      tableName: "PlannedCourses",
    }
  );
};

module.exports = PlannedCourse;

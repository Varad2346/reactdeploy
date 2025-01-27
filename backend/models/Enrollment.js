const Enrollment = (sequelize, DataTypes) => {
  return sequelize.define(
    "Enrollment",
    {
      enrollmentId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      plannedCourseId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "PlannedCourses",
          key: "plannedCourseId",
        },
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "userId",
        },
      },
      participantStatus: {
        type: DataTypes.STRING,
        values: ["present", "absent"],
        defaultValue: "absent",
        allowNull: false,
      },
      trainingFeedback: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      criteriaA: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 4,
        },
      },
      criteriaB: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 4,
        },
      },
      criteriaC: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 4,
        },
      },
      criteriaD: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 4,
        },
      },
      criteriaE: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 4,
        },
      },
      criteriaF: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 4,
        },
      },
      evaluationRemark: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dateOfEvaluation: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      reportId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "TrainingReports",
          key: "reportId",
        },
      },
    },
    {
      paranoid: true,
      timestamps: true,
      tableName: "Enrollments",
    }
  );
};

module.exports = Enrollment;

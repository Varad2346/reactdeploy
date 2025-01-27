const TrainingReport = (sequelize, DataTypes) => {
  return sequelize.define(
    "TrainingReport",
    {
      reportId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      actualDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      trainingTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      trainingEffectivenessPeriod: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      timestamps: true,
      tableName: "TrainingReports",
    }
  );
};

module.exports = TrainingReport;

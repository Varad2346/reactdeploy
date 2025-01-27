const TrainingEvaluation = (sequelize, DataTypes) => {
  return sequelize.define(
    "TrainingEvaluation",
    {
      evaluationId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      trainingEffectivenessEvaluation: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      dateOfEvaluation: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      tableName: "TrainingEvaluations",
    }
  );
};

module.exports = TrainingEvaluation;

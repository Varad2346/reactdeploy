const CourseCategory = (sequelize, DataTypes) => {
  return sequelize.define(
    "CourseCategory",
    {
      categoryId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      icon:{
        type:DataTypes.STRING,
        allowNull:true
      },
      createdBy: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "userId",
        },
      },
    },
    {
      timestamps: true,
      paranoid: true, // Enable soft deletes
      tableName: "CourseCategories",
    }
  );
};

module.exports = CourseCategory;

const User = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true, // Allow null by default
      validate: {
        isRequiredForRole(value) {
          const rolesRequiringPassword = ["admin", "hr", "hod"];
          if (
            rolesRequiringPassword.includes(this.role) && // Check role
            (!value || value.trim() === "") // Validate password presence
          ) {
            throw new Error(
              `Password is required for roles: ${rolesRequiringPassword.join(
                ", "
              )}`
            );
          }
        },
      },
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["admin", "trainer", "employee", "hr", "hod"],
      allowNull: false,
      defaultValue: "employee",
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true, // Optional field for employee's department
    },
  });
};

module.exports = User;

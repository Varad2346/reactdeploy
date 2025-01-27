const { Sequelize } = require("sequelize");
const constants = require("../constants");

const sequelize = new Sequelize(
  constants.DB_NAME,
  constants.DB_USER,
  process.env.DATABASE_KEY,
  {
    host: constants.DB_HOST,
    dialect: constants.DB_DIALECT,
    logging: constants.DB_LOGGING,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;

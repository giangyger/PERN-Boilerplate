const { Sequelize } = require("sequelize");

const {
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_HOST,
} = process.env;

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connected to database..."))
  .catch((error: Error) =>
    console.error("Unable to connect to the database:", error)
  );

export default sequelize;

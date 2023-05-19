// Importing required modules
const dbConfig = require("../config/db.config.js"); // Importing database configuration
const Sequelize = require("sequelize"); // Importing Sequelize ORM

// Setting up the database connection
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// Creating a database object
const db = {};

db.Sequelize = Sequelize; // Storing Sequelize instance in db object
db.connection = sequelize; // Storing the Sequelize connection in db object

// Our `Users` Model, we will create it in next step
db.users = require('./user.model.js')(db.connection, db.Sequelize); // Loading the Users model and passing the connection and Sequelize instance

module.exports = db; // Exporting the db object

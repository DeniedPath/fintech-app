// Import Sequelize and load environment variables
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create a Sequelize instance with environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database user
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST, // Database host
    dialect: 'mysql', // Use MySQL as the database dialect
    port: process.env.DB_PORT, // Database port
  }
);

// Test the database connection and log success or error
sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;
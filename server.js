// Import necessary modules
// import express from 'express'; // Uncomment if you need to use Express
import sequelize from './config/database.js';
// import routes from './routes/index.js'; // Uncomment if you have routes
import User from './models/user.js';
import Transaction from './models/transaction.js';
// import 'dotenv/config'; // Uncomment if you need dotenv

try {
  // Test the database connection
  await sequelize.authenticate();
  console.log('Database connected');

  // Synchronize the User and Transaction models
  await User.sync();
  await Transaction.sync();
  console.log('Database synchronized');

  // Start the server (if using Express)
  // app.listen(PORT, () => {
  //   console.log(`Server running on port ${PORT}`);
  // });
} catch (error) {
  // Log any errors that occur during the connection or synchronization process
  console.error('Error connecting to the database:', error);
}
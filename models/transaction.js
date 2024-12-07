// Import necessary modules
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

// Define the Transaction model
const Transaction = sequelize.define('Transaction', {
  // Define the ID field
  id: {
    type: DataTypes.INTEGER, // Integer data type
    primaryKey: true, // Primary key
    autoIncrement: true, // Auto-incrementing
  },
  // Define the amount field
  amount: {
    type: DataTypes.DECIMAL(10, 2), // Decimal data type with 10 digits and 2 decimal places
    allowNull: false, // Cannot be null
  },
  // Define the type field
  type: {
    type: DataTypes.ENUM('credit', 'debit'), // ENUM data type with 'credit' and 'debit' values
    allowNull: false, // Cannot be null
  },
  // Define the description field
  description: {
    type: DataTypes.STRING, // String data type
    allowNull: true, // Can be null
  },
  // Define the user_id field with foreign key constraint
  user_id: {
    type: DataTypes.INTEGER, // Integer data type
    allowNull: false, // Cannot be null
    references: {
      model: 'Users', // Reference the 'Users' model
      key: 'id', // Reference the 'id' column in the 'Users' model
    },
  },
}, {
  // Enable automatic creation of createdAt and updatedAt timestamps
  timestamps: true,
});

// Function to synchronize the database
const syncDb = async () => {
  try {
    // Test the database connection
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Synchronize the Customer and Product tables
    await Customer.sync();
    await Product.sync();
    console.log('Customer and Product tables synced successfully.');
  } catch (error) {
    // Log any errors that occur during the synchronization process
    console.error('Unable to connect to the database:', error);
  }
};

// Export the Transaction model
export default Transaction;
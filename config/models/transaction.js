import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Transaction = sequelize.define('Transaction', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
     }
});

module.exports = Transaction;
    
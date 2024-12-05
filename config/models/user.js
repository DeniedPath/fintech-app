import { DataTypes } from "sequelize";
import sequelize from '../config/database';

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = User;
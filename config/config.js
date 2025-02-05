import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        multipleStatements: true // Enable multiple statements
    }
});

async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connected to the MySQL server.');
        
        // Disable foreign key checks before sync
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
        
        // Create database and tables
        await createDatabase();
        
        // Re-enable foreign key checks
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        
        console.log('Database and tables synchronized');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
        process.exit(1);
    }
}

export { sequelize, initializeDatabase };

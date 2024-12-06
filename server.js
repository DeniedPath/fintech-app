import express from 'express';
import sequelize from './config/database.js';
import routes from './routes/index.js';

const app = express(); // Add this line to create the Express app instance

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Error connecting to the database:', err));

app.use('/', routes());

const PORT = process.env.PORT || 3360;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Use backticks for string interpolation
});
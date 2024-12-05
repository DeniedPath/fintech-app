import express from 'express';
import sequelize from './config/database';
import routes from './routes';

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Error connecting to the database:', err));

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});
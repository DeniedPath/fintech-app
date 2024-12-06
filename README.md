# Node.js Express MySQL Application

This project is a Node.js application that leverages Express.js as its web framework and utilizes MySQL as the database, with Sequelize serving as the Object-Relational Mapping (ORM) tool.

## Overview

This application illustrates the process of establishing a Node.js server using Express, connecting to a MySQL database via Sequelize, and creating User and Transaction models. It aims to serve as a solid foundation for developing robust web applications that include user management and transaction tracking features.

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation Steps

1. Clone the repository:
   ```bash
   git clone (https://github.com/DeniedPath/fintech-app.git)

2. Install the required dependencies:
      bash
   npm install

3. Configure your MySQL database and update the settings in config/database.js.
4. Start the application:
      bash
  npm start

# Usage Instructions

Once the server is running, it will try to connect to the database and synchronize the models. If everything goes well, you will see the following messages in your console:

Database connected
Database synchronized
Server running on port <PORT>


## Key Features

- Setup of an Express.js web server
- Connection to a MySQL database using Sequelize
- Definitions for User and Transaction models
- Automatic database synchronization upon startup

## Required Dependencies

- Express.js
- Sequelize
- MySQL2

## Configuration Details

Make sure to update the `config/database.js` file with your MySQL database credentials:

```javascript
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});



Feel free to customize any part of it further as needed!

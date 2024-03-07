const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbLWM', 'postgres', '2956939xD', {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log
})

module.exports = sequelize

/*
  - Connecting to a database

  - Notes:

    - in this module, we need use CommonJs for import require.
        is a topic recommend from official document.
          that is not optional.

  - Bibliography

    - https://sequelize.org/docs/v6/moved/models-definition/#deprecated-sequelizeimport

*/

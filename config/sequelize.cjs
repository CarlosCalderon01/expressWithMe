const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: '2956939xD',
  database: 'dbLWM'
})

module.exports = sequelize

/*

  - Notes:

    - in this module, we need use CommonJs for import require.
        is a topic recommend from official document.
          that is not optional.

  - Bibliography

    - https://sequelize.org/docs/v6/moved/models-definition/#deprecated-sequelizeimport

*/

const Sequelize = require('sequelize')
const dbConfig = require('./config.json')
const db = dbConfig.development

const { username, password, database, host, dialect, port } = db
const sequelize = new Sequelize(database, username, password, { host, dialect, port })
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

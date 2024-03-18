'use strict'
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/dbConfig.cjs')

class MGmtCountry extends Model {
  static associate (models) {
  }
}

MGmtCountry.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'MGmtCountry',
  tableName: 'GmtCountry',
  timestamps: false
})

module.exports = MGmtCountry

/*
  - Notes:
    - There are two ways to build a model in "express":
      - Calling sequelize.define(modelName, attributes, options)
      - Extending Model and calling init(attributes, options) --> in use

    - console.log(MGmtCountry === sequelize.models.MGmtCountry) // true

    -

    - ATTRIBUTES:
      - TINYINT, 0 a 255 (2^8 - 1).

  - Bibliography:

    - https://sequelize.org/docs/v6/core-concepts/model-basics/

*/

// 'use strict'
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     await queryInterface.createTable('GmtCountry', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false
//       }
//     })
//   },
//   async down (queryInterface, Sequelize) {
//     await queryInterface.dropTable('GmtCountry')
//   }
// }

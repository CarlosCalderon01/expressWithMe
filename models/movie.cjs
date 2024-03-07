/* - DEPENDENCIES: THIRD - */
'use strict'
const { Model, DataTypes } = require('sequelize')
/* - DEPENDENCIES: LOCAL - */
const sequelize = require('../config/dbConfig.cjs')

class Movie extends Model {
  static associate (models) {
  }
}

Movie.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Movie',
  tableName: 'movies'
})

module.exports = Movie

/*
  - Notes:
    - There are two ways to build a model in "express":
      - Calling sequelize.define(modelName, attributes, options)
      - Extending Model and calling init(attributes, options)

  - Bibliography:

    - https://sequelize.org/docs/v6/core-concepts/model-basics/

*/

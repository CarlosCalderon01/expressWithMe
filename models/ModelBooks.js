'use strict'
import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Book extends Model {
    static associate (models) {
    }
  }
  Book.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    autor: {
      type: DataTypes.STRING(20)
    },
    scorebook: {
      type: DataTypes.CHAR(1)
    },
    review: {
      type: DataTypes.BOOLEAN
    },
    pricebook: {
      type: DataTypes.DECIMAL(10, 2)
    },
    datepublic: {
      type: DataTypes.DATE
    },
    datesell: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Book'
  })
  return Book
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// const { Model } = require('sequelize') // COMMON JS

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

/*
  MODELS - BOOK
    Use METHOD -->
      Calling sequelize.define(modelName, attributes, options)
*/

/*
  - Apuntes:

    - Existen dos maneras de construir un modelo en express.

      {
        Calling sequelize.define(modelName, attributes, options)

        Extending Model and calling init(attributes, options)
      }
*/

/*
  - Biliografia:

    - https://sequelize.org/docs/v6/core-concepts/model-basics/

*/

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

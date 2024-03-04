// Advertencia no se puede usar ESM para importar modelos, solo commonJS
'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  movie.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie'
  })
  return movie
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

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

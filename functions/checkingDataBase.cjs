const sequelize = require('./config/dbConfig.cjs')

function checkingDataBase () {
  sequelize.sync()
    .then(() => {
      console.log('Synchronizing model with the database.')
    })
    .catch((error) => {
      console.error('Model synchronization error.', error)
    })
}

module.exports = { checkingDataBase }

/* - DEPENDENCIES: THIRD - */
const express = require('express')
const bodyParser = require('body-parser')
/* - DEPENDENCIES: LOCAL - */
// const sequelize = require('./config/dbConfig.cjs')
const viewMovieRoutes = require('./view/viewMovie.cjs')
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- //
const app = express()
const PORT = 3000

// function checkingDataBase () {
//   sequelize.sync()
//     .then(() => {
//       console.log('Synchronizing model with the database.')
//     })
//     .catch((error) => {
//       console.error('Model synchronization error.', error)
//     })
// }
// checkingDataBase()

app.use('/movies', viewMovieRoutes)

app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`Server Start in http://localhost:${PORT}`)
})

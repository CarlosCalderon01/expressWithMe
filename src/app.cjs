/* - DEPENDENCIES: THIRD - */
const express = require('express')
const bodyParser = require('body-parser')
/* - DEPENDENCIES: LOCAL - */
// const sequelize = require('./config/dbConfig.cjs')
const VGmtCountry = require('./view/VGmtCountry.cjs')
// const viewGmtGender = require('./view/viewGmtGender.cjs')
// const funcChekDB = require('../src/functions/checkingDataBase.cjs')

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- //

const app = express()
const PORT = 3000
app.use(bodyParser.json())

// app.use('/gmtgender', viewGmtGender)
app.use('/gmtcountry', VGmtCountry)

// funcChekDB.testAuthenticate()

app.listen(PORT, () => {
  console.log(`Server Start in http://localhost:${PORT}`)
})

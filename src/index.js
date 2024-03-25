const express = require('express')
const bodyParser = require('body-parser')
const viewsApp = require('./views/index')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('<h1> Welcome Home! </h1>')
})

app.use('/api', viewsApp)
app.listen(PORT, () => {
  console.log(`Server Start in http://localhost:${PORT}`)
})

/*

- Notes:

- Bibliography:

*/

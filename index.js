const express = require('express')
const app = express()

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// REQUEST BODY
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// Agrega middleware para parsear el cuerpo de la solicitud como JSON
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: false })) // can Lisening {Body form-encode}

app.get('/', (req, res) => {
  res.send('Page Home!')
})

app.get('/user', (req, res) => {
  res.send('Get list User')
})

// Utiliza express.json() para manejar el cuerpo de la solicitud JSON
app.post('/user', (req, res) => {
  res.send('Create New User')
  console.log(req.body) // req.body ahora contendrá el cuerpo de la solicitud JSON
})

// EXAMPLE
/*
            Request
            -->
            <--
  - url(endpoint) --> /user
  - header        --> json
  - json          --> {}

*/
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// REQUEST BODY
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// TESTING SERVER
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
app.listen(3000, () => {
  console.log('Server running on port 3000')
})
// console.log(`Server on port ${3000}`)

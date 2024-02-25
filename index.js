const express = require('express')
const app = express()

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// REQUEST PARAMS
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// Agrega middleware para parsear el cuerpo de la solicitud como JSON
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: false })) // can Lisening {Body form-encode}

app.get('/', (req, res) => {
  res.send('Page Home!')
})

app.get('/user', (req, res) => {
  res.send('Page User!')
})

// extraer un parametro desde la url
// primero extrae el valor, luego lo concatena y manda
app.get('/user/:username', (req, res) => {
  console.log(typeof req.params.username)
  res.send(`hello ${req.params.username.toLocaleUpperCase}`)
})

// app.get('/add/:x/:y', ({params: {x, y}}, res) => {
app.get('/add/:x/:y', (req, res) => {
  // desectructurador de javascript
  const { x, y } = req.params
  // const result = parseInt(req.params.x) + parseInt(req.params.y)
  // const result = parseInt(x) + parseInt(y)
  // res.send(`Resultado: ${result}`)
  res.send(`Resultado: ${parseInt(x) + parseInt(y)}`)
})

app.get('/users/:username/photo', (req, res) => {
  if (req.params.username === 'carl') {
    return res.sendFile('./static/img1.jpg', {
      root: __dirname
    })
  }
  res.send('el usuario no tiene acceso')
})

app.get('/nombre/:nombre/age/:age', (req, res) => {
  const { nombre, age } = req.params
  res.send(`El usuario ${nombre} tienen ${age} años`)
})

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// REQUEST PARAMS
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// TESTING SERVER
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
app.listen(3000, () => {
  console.log('Server running on port 3000')
})
// console.log(`Server on port ${3000}`)

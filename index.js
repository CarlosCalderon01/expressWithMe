const express = require('express')
const app = express()

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// Middlewares
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

/*
  - un middleware es un software que actúa como un intermediario entre dos aplicaciones, sistemas o componentes de software.
  - En el caso de Express.js, los middlewares son funciones que se ejecutan en el medio (middleware) del ciclo de solicitud y respuesta.
*/

// todas las rutas tienen que pasar por esta funcion. esto es un middlewaves
app.use((req, res, next) => {
  console.log(`Route: ${req.url} Method: ${req.method}`)
  next()
})

app.get('/', (req, res) => {
  res.send('Page Home!')
})

// use Method all
app.all('/profile', (req, res) => {
  res.send('profile page')
})

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// Middlewares
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// TESTING SERVER
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
app.listen(3000, () => {
  console.log('Server running on port 3000')
})
// console.log(`Server on port ${3000}`)

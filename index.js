const express = require('express')
const app = express()

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// Introduccion a Middlewares
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

/*
  - un middleware es un software que actúa como un intermediario entre dos aplicaciones, sistemas o componentes de software.
  - En el caso de Express.js, los middlewares son funciones que se ejecutan en el medio (middleware) del ciclo de solicitud y respuesta.
*/

// Ejemplo Middlewaves LOGGER --> all rutas
app.use((req, res, next) => {
  console.log(`Route: ${req.url} Method: ${req.method}`)
  next()
})

// Ejemplo Middlewaves Is Authenticated --> PAGE DASHBOARD
app.use((req, res, next) => { // Aplica para todas las rutas de aqui hacia abajo
  if (req.query.login === 'carlitos@outlook.com') {
    next()
  } else {
    res.send('no esta autorizado')
  }
})

app.get('/', (req, res) => {
  res.send('Page Home!')
})

// PAGE - DASHBOARD
app.get('/dashboard', (req, res) => {
  res.send('PAGE - DASHBOARD')
})

// use Method all
app.all('/profile', (req, res) => {
  res.send('profile page')
})

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// Introduccion a Middlewares
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// TESTING SERVER
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
app.listen(3000, () => {
  console.log('Server running on port 3000')
})
// console.log(`Server on port ${3000}`)

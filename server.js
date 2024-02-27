// MODULES THIRD
const express = require('express')
const morgan = require('morgan')
// MODULES LOCAL
const app = express()
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Pagina Home!')
})

app.post('/products', (req, res) => {
  res.send('Pagina')
})

app.get('/products', (req, res) => {
  res.send('Pagina')
})

app.put('/products', (req, res) => {
  res.send('Pagina')
})

app.delete('/products', (req, res) => {
  res.send('Pagina')
})

app.get('/products/:id', (req, res) => {
  res.send('obtiene un producto')
})

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //
app.listen(3000)
console.log(`Escuchando el puerto ${3000}`)

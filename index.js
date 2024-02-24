const express = require('express')
const app = express()

app.get('/products', (req, res) => {
  res.send('Get list Products')
})

app.post('/products', (req, res) => {
  res.send('post list Products')
})

app.put('/products', (req, res) => {
  res.send('put list Products')
})

app.delete('/products', (req, res) => {
  res.send('delete list Products')
})

app.patch('/products', (req, res) => {
  res.send('patch list Products')
})

app.listen(3000)
console.log(`Server on port ${3000}`)

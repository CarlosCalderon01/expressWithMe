/*
    Creando un servidor de node sin express
*/

// const http = require('node:http')
// const fs = require('node:fs')

// const server = http.createServer((req, res) => {
//   const read = fs.createReadStream('.//static/index.html')
//   read.pipe(res)
// })

// server.listen(3000)
// console.log(`Server on port ${3000}`)

/*
    Creando un servidor de node con express
*/

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.sendFile('./static/index.html', {
    root: __dirname
  })
})

app.listen(3000)
console.log(`Server on port ${3000}`)

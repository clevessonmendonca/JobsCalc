const express = require('express')
const server = express()
const routes = require('./routes.js')
const path = require('path')

// Usando templete engine EJS
server.set('view engine', 'ejs')

// Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

// Habilitar arquivos statics
server.use(express.static("public"))

// Usar o req.body
server.use(express.urlencoded({ extended: true }))

// Routes
server.use(routes)

server.listen(3000, () => {
    console.log('Rodando...')
})
const express = require('express')

const app = express()

const server = require('http').createServer(app)

const port = '3000'
app.use(express.static('public'))
app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/search',(req,res) => {
    res.sendFile(__dirname + '/search.html')
})
server.listen(port,() => {
    console.log('servidor rodando na porta 3000')
})
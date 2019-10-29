const port = 3003 
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())

server.listen(port, function(){
	console.log(`BACKEND is running on port ${port}.`)
})

server.use(function(req, res, next){ // sempre usar o next, se não a requisição não irá continuar.Middleare, pegou os dados e irá enviar, sem o next, iria parar por aqui.
	res.send('servidor online')
})

module.exports=server
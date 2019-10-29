const express=require('express')

module.exports=function(server){     //recebendo como parametro a função server LINHA 4 arquivo server.js

	//API Routes

	const router = express.Router()
	server.use('/api',router) //sempre q houver a palavre API na URL esse middleare será chamado

	router.route('/teste').get(function(req, res, next){
		res.send('funcionou')
	})

}
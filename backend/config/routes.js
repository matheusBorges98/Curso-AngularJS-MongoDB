const express=require('express')

module.exports=function(server){     //recebendo como parametro a função server LINHA 4 arquivo server.js

	//API Routes

	const router = express.Router()
	server.use('/api',router) //sempre q houver a palavre API na URL esse middleare será chamado

	
	//rotas API

	const billingCycleService = require('../api/billingCycle/billingCycleService')
	billingCycleService.register(router, '/billingCycles')

	const billingSummaryService=require('../api/billingSummary/billingSummaryService')
	router.route('/billingSummary').get(billingSummaryService.getSummary)
}
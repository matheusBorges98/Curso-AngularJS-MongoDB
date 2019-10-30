 const_=require('lodash')
const BillingCycle = require('./billingCycle')  /*require do mapeamento*/

BillingCycle.methods(['get','post','put','delete'])  //noderest vai usar uma API para criar uma CRUD. Automatizado chamadas com o mongoose| Metodos acessaram o schema billing cycles fazendo alterações
BillingCycle.updateOptions({new:true, runValidators:true}) /*retornar o objeto novo e nao o antigo e o runValidators ira rodar os validadores de campos do BillingCycles.*/

BillingCycle.after('post',sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req,res,next){
	const bundle = res.locals.bundle //node
	if(bundle.erros){
		var errors= parseErrors(bundle.errors)
		res.status(500).json({errors})
	}else{
		next()

	}
}
function parseErrors(nodeRestFulErrors){
	const errors=[]
	_.forIn(nodeRestFulErrors, error=>errors.push(error.message))
	return errors
}

BillingCycle.route('count', function(req, res, next){  //middleare do count
	BillingCycle.count(function(error,value){
		if(error){
			res.status(500).json({errors:[error]}) //tratando erros de validações, mensagens de erro melhor definidas para facilitar trabalho no front end
		}else{
			res.json({value})
		}
	})
})

module.exports = BillingCycle
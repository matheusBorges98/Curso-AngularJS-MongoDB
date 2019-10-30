 const_=require('lodash')
 const BillingCycle=require('../billingCycle/billingCycle')


 // middleare

 function getSummary(req, res){
	 BillingCycle.aggregate({   //api mongoose, documentacao mongodb
		 $project:{credit:{$sum:"$credits.value"}, debt:{$sum:"debts.value"}}   //extraindo a soma dos valores de debitos e creditos
	 }, {

	$group:{_id: null, credit:{$sum:"$credit"}, debt:{$sum:"$debt"}}
	 }, {

		$project:{_id:0, credit:1, debt:1}   // se 0 não vai mostrar
	 }, function(error, result) {

	 if (error){
		 res.status(500).json({errors:[error]})
	 }else{
		 res.json(_.defaults(result[0],{credit:0, debt:0}))
	 }
		})
 }

 module.exports={getSummary}  //apontando para a função definida na linha 7 e exportando modulo
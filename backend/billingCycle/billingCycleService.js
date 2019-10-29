const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get','post','put','delete'])  //noderest vai usar uma API para criar uma CRUD. Automatizado chamadas com o mongoose| Metodos acessaram o schema billing cycles fazendo alterações

module.exports = BillingCycle
const mongoose = require('mongoose')
modeule.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "o atributo '{PATH}' é obrigatorio"              //tratamento da mensagem de erro, que tem required
mongoose.Error.messages.number.min="O '{VALUE}'informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.Messages.number.min="O '{VALUE}'informado é menor que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum="'{VALUE}' não é válido para o atributo '{PATH}'."
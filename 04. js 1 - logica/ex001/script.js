var nome = window.prompt('Escreva seu nome')
var sobrenome = window.prompt('Escreva seu sobrenome')
var campo = window.prompt('Qual seu campo de estudo?')
var ano = window.prompt('Em que ano você nasceu?')
var res = document.querySelector('div#res')
var idade = 2023 - Number(ano)

res.innerHTML += `Seu nome é ${nome} ${sobrenome}, seu campo de estudo é ${campo} e você tem ${idade} anos.`

var num1 = window.prompt('Informe o primeiro número')
var num2 = window.prompt('Informe o segundo número')
soma = Number(num1) + Number(num2)
sub = Number(num1) - Number(num2)
mult = Number(num1) * Number(num2)
div = Number(num1) / Number(num2)

res.innerHTML += `Soma: ${soma}
Subtração: ${sub}
Multiplicação ${mult}
Divisão ${div}`

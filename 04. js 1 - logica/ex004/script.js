var nome = prompt('Qual seu nome?')
var cities = ""
var contador = 0

var question = prompt('Você já visitou alguma cidade?')

while (question=="sim"){
    var city = prompt('Qual o nome da cidade visitada?')
    cities += " - " + city + "\n"
    contador++
    var question = prompt('Você já visitou alguma outra cidade?')
}

alert(
    "Turista: " + nome +
    "\nQuantidade de cidades visitadas: " + contador +
    "\nCidades Visitadas:\n" + cities
)
function calcular(){

var vel1 = Number(document.querySelector('input#vel1').value)
var vel2 = Number(document.querySelector('input#vel2').value)
var res = document.querySelector('div#res')

    res.innerHTML = null

    if (vel1 > vel2) {
        res.innerHTML += `A velocidade do carro pica é maior que a do celta`
    } else if (vel1 < vel2) {
        res.innerHTML += `A velocidade do celta é maior que a do carro pica`
    } else {
        res.innerHTML += `Vai ficar um do lado do outro, afinal ${vel1}km é ${vel2}km.`
    }

}
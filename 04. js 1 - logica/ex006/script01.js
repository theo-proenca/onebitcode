let numero = prompt('Informe um número para ser calculado')
let res = "Tabuada de " + numero
let tabuada = 1

for (
    alert('Iniciando os cálculos');
    tabuada <= 20;
    tabuada++
)   {
    let calc = tabuada*numero
    res += "\n" + numero + "x" + tabuada + "=" + calc 
}

alert(res)
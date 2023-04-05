var metros = Number(prompt('Informe um valor em metros'))
var mm = metros*1000
var cm = metros*100
var dm = metros*10
var dam = metros/10
var hm = metros/100
var km = metros/1000
var res = prompt('Escolha para qual unidade você deseja converter os metros e informe o número da alternativa:\n1. milímetro (mm)\n2. centímetro (cm)\n3. decímetro (dm)\n4. decâmetro (dam)\n5. hectômetro (hm)\n6. quilômetro (km)')

switch (res) {
    case "1":
        alert(`${metros} metros equivalem a ${mm} milímetros`)
        break
    case "2":
        alert(`${metros} metros equivalem a ${cm} centímetros`)
        break
    case "3":
        alert(`${metros} metros equivalem a ${dm} decímetros`)
        break
    case "4":
        alert(`${metros} metros equivalem a ${dam} decâmetros`)
        break
    case "5":
        alert(`${metros} metros equivalem a ${hm} hectômetros`)
        break
    case "6":
        alert(`${metros} metros equivalem a ${km} milímetros`)
        break
    default:
        alert('Finalizando..')
}
let saldo = prompt('Informe o saldo inicial:')
saldo = Number(saldo)
let opcao = ''

do {
    opcao = prompt(
        `Saldo atualizado: R$ ${saldo}
        \n1. Adicionar Entrada
        \n2. Adicionar Saída
        \n3. Encerrar`
    )
    
    switch(opcao) {
        case "1":
            saldo += Number(prompt("Informe o valor da entrada:"))
            break
        case "2":
            saldo -= Number(prompt("Informe o valor da saída:"))
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Operação validada!")
    }      
} while (opcao !== "3")
saldo = 0
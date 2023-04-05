const pilha = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas no baralho:\n" + pilha.length +
        "\nEscolha uma ação:\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
    )
    
    switch (opcao) {
        case "1":
            const novaCarta = prompt('Qual a carta adicionada?')
            pilha.push(novaCarta)
            break
        case "2":
            const puxaCarta = pilha.pop()
            alert(puxaCarta + " foi puxada da pilha.")
            break
        case "3":
            alert('Encerrando...')
            break
        default:
            alert('Opção Inválida!')
    }
} while (opcao !== "3")


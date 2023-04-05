let escolha = "5"

do {
    escolha = prompt("Escolha uma opção:\n1. Iniciar\n2. Adicionar\n3.Editar\n4. Excluir\n5. Encerrar")
    alert(`Você escolheu a opção ${escolha}`)
    
} while (escolha !== "5")

alert("O sistema está encerrando.")
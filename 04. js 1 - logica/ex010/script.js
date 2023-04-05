let opcao = ""
const vagas = []

function menuInicial(){
    opcao = prompt(
        "Bem vindo ao sistema de vagas de emprego!\n" +
        "Escolha uma opção:\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar uma nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever um candidato em uma vaga\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair")
}

function listar(){
    const lista = vagas.reduce(function(txt, vaga, index){
    txt += index + ". "
    txt += vaga.nome
    txt += " (" + vaga.candidatos.length + " candidatos)\n"
    return txt
    },"")

    alert(lista)
}
function criar(){
    const vaga = {}
    vaga.nome = prompt('Informe o nome da vaga')
    vaga.desc = prompt('Descreva a vaga')
    vaga.limit = prompt('Qual a data limite para inscrição? Formato DD/MM/YYYY')
    vaga.candidatos = []

    const confirmacao = confirm(
        "Salvar esta vaga?\n" +
        "\n Nome: " + vaga.nome +
        "\n Descrição: " + vaga.desc +
        "\n Data Limite: " + vaga.limit
    )

    if (confirmacao) {
        vagas.push(vaga)
    } else {
        alert("Criação de vaga cancelada!")
    }
}

function visualizar(){ 
    const vagaIndex = prompt('Qual o índice da vaga? (Se não sabe, consultar na opção 1)')
    
    alert("Vaga selecionada: " + vagas[vagaIndex].nome +
    "\nÍndice da vaga: " + vagaIndex +
    "\nDescrição da vaga: " + vagas[vagaIndex].desc +
    "\nData Limite: " + vagas[vagaIndex].limit +
    "\nQuantidade de Candidatos: " + vagas[vagaIndex].candidatos.length +
    "\nCandidatos: " + vagas[vagaIndex].candidatos
    )
}

function inscrever(){
    const candidato = prompt('Informe o nome do candidato: ')
    const vagaIndex = prompt('Informe o índice da vaga: ')

    const confirmacao = confirm(
        "Salvar esta Inscrição?\n" +
        "\n Candidato: " + candidato +
        "\n Vaga: " + vagas[vagaIndex].nome 
    )

    if (confirmacao) {
        vagas[vagaIndex].candidatos.push(candidato)
    } else {
        alert("Inscrição cancelada!")
    }
}

function excluir(){
    const vagaIndex = prompt('Qual o índice da vaga? (Se não sabe, consultar na opção 1)')
    
    if (vagaIndex > vagas.length) {
        alert('Vaga Inexistente!')
    } else {
        alert("Vaga selecionada: " + vagas[vagaIndex].nome +
        "\nÍndice da vaga: " + vagaIndex +
        "\nDescrição da vaga: " + vagas[vagaIndex].desc +
        "\nData Limite: " + vagas[vagaIndex].limit +
        "\nQuantidade de Candidatos: " + vagas[vagaIndex].candidatos.length +
        "\nCandidatos: " + vagas[vagaIndex].candidatos
        )
    }
    
    const confirmacao = confirm(
        "Excluir esta vaga?\n" +
        "\n Nome: " + vagas[vagaIndex].nome +
        "\n Descrição: " + vagas[vagaIndex].desc +
        "\n Data Limite: " + vagas[vagaIndex].limit
    )

    if (confirmacao) {
        vagas.splice(vagaIndex)
    } else {
        alert("Exclusão de vaga cancelada!")
    }
}

do {
    menuInicial()

    switch (opcao){
        case "1":
            listar()
            break
        case "2":
            criar()
            break
        case "3":
            visualizar()
            break
        case "4":
            inscrever()
            break
        case "5":
            excluir()
            break
        case "6":
            alert("Encerrando...")
            break
        default:
            alert("Opção Inválida!")
    }
} while (opcao !== "6")
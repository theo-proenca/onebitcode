const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Imóveis cadastrados:\n" + imoveis.length +
        "\nEscolha uma ação:\n1. Salvar um imóvel\n2. Mostrar todos imóveis\n3. Sair"
    )
    
    switch (opcao) {
        case "1":
            const novoImovel = {}

            novoImovel.prop = prompt('Quem é o proprietário desse imóvel?')
            novoImovel.quartos = prompt('Quantos quartos tem nesse imóvel?')
            novoImovel.banheiros = prompt('Quantos banheiros tem nesse imóvel?')
            novoImovel.garagem = prompt('Esse imóvel possui garagem?')

            const confirmacao = confirm(
                "Salvar este imóvel?\n" +
                "\n Proprietário: " + novoImovel.prop +
                "\n Quartos: " + novoImovel.quartos +
                "\n Banheiros: " + novoImovel.banheiros +
                "\n Possui garagem? " + novoImovel.garagem
            )

            if (confirmacao) {
                imoveis.push(novoImovel)
            } else {
                alert("Inclusão cancelada!")
            }

            break
        case "2":
            for (let i = 0;i < imoveis.length;i++) {
                alert(
                    "Imóvel " + (i + 1) + ":" + 
                    "\nProprietário: " + imoveis[i].prop +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem? " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert('Encerrando...')
            break
        default:
            alert('Opção Inválida!')
    }
} while (opcao !== "3")


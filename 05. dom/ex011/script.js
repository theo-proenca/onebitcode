function add(){
    const players = document.getElementById('players')
    const position = document.getElementById('position')
    const name = document.getElementById('name')
    const number = document.getElementById('number')

    const div = document.createElement('div')
    div.setAttribute("id",'player-'+number.value
    )
    const h3 = document.createElement('h3')
    h3.innerText = name.value

    const ul = document.createElement('ul')

    const posLi = document.createElement('li')
    posLi.innerText = "Posição: " + position.value
    ul.appendChild(posLi)
    ul.appendChild(document.createElement('br'))

    const numLi = document.createElement('li')
    numLi.innerText = "Número da Camiseta: " + number.value
    ul.appendChild(numLi)
    ul.appendChild(document.createElement('br'))

    div.append(h3,ul)

    const confirmacao = confirm(
        "Salvar esta escalação?\n" +
        "\n Nome: " + name.value +
        "\n Posição: " + position.value +
        "\n Número da Camisa: " + number.value
    )

    if (confirmacao) {
        players.append(div)
        position.value = ''
        name.value = ''
        number.value = ''
    } else {
        alert("Escalação cancelada!")
    }
    
}

function remove(){
    const number2 = document.getElementById('number2')
    const remove = document.getElementById('player-' + number2.value)

    const confirmacao = confirm(
        "Remover esse jogador da escalação?\n" +
        remove.innerText
    )

    if (confirmacao) {
        document.getElementById('players').removeChild(remove)
        document.getElementById('number2').value = ''
    } else {
        alert("Remoção cancelada!")
    }
}
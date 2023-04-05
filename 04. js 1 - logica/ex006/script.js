let word = prompt('Informe uma palavra:')
let reverseWord = ''

for (
    let i = word.length -1;
    i >= 0;
    i--
) {
    reverseWord += word[i]
}

if (word === reverseWord) {
    alert(`A palavra ${word} é uma palíndromo`)
} else {
    alert(`A palavra ${word} NÃO é uma palíndromo!\n${word} !== ${reverseWord}`)
}

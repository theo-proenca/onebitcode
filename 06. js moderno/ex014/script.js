const res = document.querySelector('div#res')

function mediaAritSimp (...valores) {
  const total = valores.reduce((accum, num) => accum + num, 0)
  return total /valores.length
} 
console.log (`Média Aritmética Simples: ${mediaAritSimp(2,4,2,10,100,300,500)}`)

function mediaAritPond (...numbers) {
    const total = numbers.reduce((accum, {num, wei}) => accum + (num * wei ?? 1), 0)
    const totalWeight = numbers.reduce((accum, weig) => accum + weig.wei ?? 1, 0)
    return total / totalWeight
} 
console.log (`Média Aritmética Ponderada: ${mediaAritPond(
    {num: 9, wei: 3},
    {num: 7, wei: 1},
    {num: 10, wei: 1}
)}`)

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a,b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return mediaAritSimp(firstMedian, secondMedian)
}
console.log (`Mediana: ${median(2,4,2,10,100,300,500)}`)

const mode = (...numbers) => {
    const qty = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    qty.sort((a,b) => b[1] - a[1])
    return qty[0][0]
}
console.log (`Moda: ${mode(2,4,2,10,100,300,500)}`)
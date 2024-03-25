let a = Number(prompt('Digite o valor de A'))
let b = Number(prompt('Digite o valor de B'))

document.write(`a = ${a}<br>`)
document.write(`b = ${b}<br>`)

// Troca
// let aux = a
// a = b
// b = aux

a = a + b
b = a - b
a = a - b


document.write(`a = ${a}<br>`)
document.write(`b = ${b}`)
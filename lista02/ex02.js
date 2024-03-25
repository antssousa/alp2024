let n1 = Number(prompt('Digite um número'))
let n2 = Number(prompt('Digite outro número'))

let soma = n1 + n2
let sub = n1 - n2
let mult = n1 * n2
let div = n1 / n2

document.write(`${n1} + ${n2} = ${soma}<br>`)
document.write(`${n1} - ${n2} = ${sub}<br>`)
document.write(`${n1} * ${n2} = ${mult}<br>`)
document.write(`${n1} / ${n2} = ${div.toFixed(2)}<br>`)
let area = Number(prompt('Digite a área a ser pintada me metros quadrados'))
let rend = Number(prompt('Digite o rendimento da tinta em metros quadrados por litro'))

let litros = area / rend

document.write(`A quantidade de litros é ${litros.toFixed(2)}`)
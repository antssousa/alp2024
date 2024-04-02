let c = Number(prompt('Digite o capital inicial'))
let i = Number(prompt('Digite a taxa de juros'))
let t = Number(prompt('Digite o tempo'))

let j = c * (i / 100) * t

let m = c + j

document.write(`O valor montante em ${t} meses é R$ ${m.toFixed(2)}`)
let nota1 = Number(prompt('Digite a 1ª nota'))
let nota2 = Number(prompt('Digite a 2ª nota'))
let nota3 = Number(prompt('Digite a 3ª nota'))

let media = (nota1 + nota2 + nota3) / 3

document.write(`A média do aluno é ${media.toFixed(2)}`)
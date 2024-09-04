let notas = []

for(let i = 0; i < 5; i++){
    notas[i] = Number(prompt(`Digite a nota ${i}`))
}

document.write(notas + '<br> ')

let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]
}

let media = soma / notas.length

document.write(`A média da turma é ${media}`)


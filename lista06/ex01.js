// let vetor = []

// for (let i = 0; i < 10; i++) {
//     vetor[i] = Number(prompt(`Digite ${i + 1}º número`))
// }

let vetor = prompt('Digite os números separados por vírgula').split(',').map(Number)

let soma = 0
for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i] // soma = soma + vetor[i]
}

document.write(`A soma dos elementos do vetor é ${soma}`)
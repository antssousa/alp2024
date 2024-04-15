let n1 = Number(prompt('Digite o 1º número'))
let n2 = Number(prompt('Digite o 2º número'))
let n3 = Number(prompt('Digite o 3º número'))

let maior = 0

if (n1 >= n2){
    maior = n1
} else {
    maior = n2
}

if (n3 >= maior){
    maior = n3
}

document.write(`O maior número é ${maior}`)
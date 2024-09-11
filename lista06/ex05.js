let vetor = []

for (let i = 0; i < 20; i++) {
    vetor[i] = Math.floor(Math.random() * 100)    
}

let maior = 0 // Maior número
let menor = 0 // Menor número

for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > vetor[maior]){
        maior = i
    }

    if (vetor[i] < vetor[menor]){
        menor = i
    }
}

document.write(`vetor =[${vetor}]<br>`)
document.write(`O maior é ${vetor[maior]} e se encontra na posição ${maior}<br>`)
document.write(`O menor é ${vetor[menor]} e se encontra na posição ${menor}`)
let vetor = []
for (let i = 0; i < 10; i++) {
    vetor[i] = Math.floor(Math.random() * 100)
}

let pares = []

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0){
        pares.push(vetor[i])
    }    
}

document.write(`vetor = [${vetor}]<br>`)
document.write(`pares = [${pares}]<br>`)
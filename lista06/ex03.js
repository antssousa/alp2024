let vetor = [ ]

for (let i = 0; i < 10; i++) {
    vetor[i] = Math.floor(Math.random() * 10)
}

let n = Number(prompt('Digite o número que desejas remover'))


document.write(vetor)
document.write('<br>') 
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] == n){
        vetor[i] = null
    }    
}
document.write(vetor) 

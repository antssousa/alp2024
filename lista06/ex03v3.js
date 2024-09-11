let vetor = [ ]
let novo_vetor = []

for (let i = 0; i < 10; i++) {
    vetor[i] = Math.floor(Math.random() * 10)
}

let n = Number(prompt('Digite o número que desejas remover'))


document.write(vetor)
document.write('<br>') 
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] != n){
        novo_vetor.push(vetor[i])
    }    
}
document.write(novo_vetor + '<br>') 
document.write(`O tamanho do vetor é ${vetor.length}<br>`) 
document.write(`O tamanho do novo vetor é ${novo_vetor.length}<br>`) 

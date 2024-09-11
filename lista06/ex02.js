vetor = []
for (let i = 0; i < 10; i++) {
    vetor[i] = Math.floor(Math.random() * 10)
}

let n = Number(prompt('Digite o número que deseja encontrar'))
document.write(vetor +  '<br>')

let achou = -1
for (let i = 0; i < vetor.length; i++) {
    if (n == vetor[i]){
        achou = i
        // break
    } 
}

if (achou != -1){
    document.write(`O número ${n} foi encontrado na posição ${achou}`)
} else {
    document.write(`O número ${n} não foi encontrado`)

}
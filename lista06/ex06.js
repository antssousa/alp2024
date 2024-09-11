let vetor = []
for (let i = 0; i < 10; i++) {
    vetor[i] = Math.floor(Math.random() * 10)
}
document.write('No momento da criação<br>')
document.write(`vetor = [${vetor}]<br>`)
// vetor.reverse()

let novo = []
for (let i = vetor.length - 1; i >= 0; i--) {
    // document.write(`${vetor[i]} `)
    novo.push(vetor[i])
}
document.write('Depois da troca<br>')

document.write(`vetor = [${vetor}]<br>`)
document.write(`novo = [${novo}]<br>`)
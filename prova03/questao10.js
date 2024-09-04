let capital = Number(prompt('Digite o investimento'))
let tx = Number(prompt('Digite a taxa de juros'))
let anos = Number(prompt('Digite a quantidade em anos'))
let jurosTotal = 0
let montante = capital

for (let i = 0; i < anos; i++) {
    let juros = montante * tx / 100
    montante += juros 
    document.write(`O valor do investimento no ${i + 1}º ano é R$ ${montante.toFixed(2)}<br>`)
    jurosTotal += juros
}

document.write(`O valor do juros ganho em ${anos} anos é R$ ${jurosTotal.toFixed(2)}`)


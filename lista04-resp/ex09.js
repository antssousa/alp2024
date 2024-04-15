let preco = Number(prompt('Digite o preço dos produtos'))
let quant = Number(prompt('Digite a quantidade de produtos'))

let preco_ant = preco * quant
let preco_final = 0

if (quant > 20){
    preco_final = preco_ant - (preco_ant * 0.1)
    // preco_final = preco_ant * 0.9
} else if (quant > 10) {
    preco_final = preco_ant - (preco_ant * 0.05)
    // preco_final = preco_ant * 0.95
} else {
    preco_final = preco_ant
}

document.write(`O preço final será R$ ${preco_final}`)
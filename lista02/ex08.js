let perc = Number(prompt('Digite o percentual de lucro (%)'))
let custo = Number(prompt('Digite o valor de custo do produto'))

let aumento = custo * (perc / 100)

let venda = custo + aumento

document.write(`O aumento do produto será de R$ ${aumento.toFixed(2)} e o preço de venda será de R$ ${venda.toFixed(2)}`)
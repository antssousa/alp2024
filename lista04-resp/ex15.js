/*
Desenvolva um sistema que classifique e notifique as multas de trânsito com base na velocidade do
veículo em comparação com o limite de velocidade na via. O sistema deve considerar:
• Limite de velocidade da via (em km/h).
• Velocidade do veículo (em km/h).
A multa é classificada da seguinte forma:
• Sem Multa: Se a velocidade do veículo estiver dentro do limite permitido.
• Multa Leve: Se a velocidade do veículo exceder o limite em até 20%.
• Multa Grave: Se a velocidade do veículo exceder o limite em mais de 20% até 50%.
• Multa Gravíssima: Se a velocidade do veículo exceder o limite em mais de 50%.
• O sistema deve imprimir a classificação da multa e a porcentagem de excesso de velocidade.
Para os casos de multa, calcule e imprima também o valor a ser pago, considerando que a multa
leve custa R$100,00, a grave R$300,00 e a gravíssima R$900,00. 
*/
let limite = Number(prompt('Digite o limite de velocidade da via (km/h)'))
let velocidade = Number(prompt('Digite a velocidade do veículo (km/h)'))
let excesso = ((velocidade - limite) / limite) * 100
let multa = 'Sem multa'
let valor = 0

if(excesso >= 0 && excesso <= 20){
    multa = 'Multa leve'
    valor = 100
} else if(excesso <= 50){
    multa = 'Multa grave'
    valor = 300
} else {
    multa = 'Multa gravíssima'
    valor = 900
}

document.write(`Classificação da multa: ${multa}<br>`)
if(valor > 0){
    document.write(`Porcentagem de excesso de velocidade: ${excesso}%<br>`)
    document.write(`Valor a ser pago: R$ ${valor}`)
}

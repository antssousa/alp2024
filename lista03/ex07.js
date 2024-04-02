// Solicita ao usuário a distância percorrida e o tempo gasto
let distancia = Number(prompt("Digite a distância percorrida (em km):"))
let tempo = Number(prompt("Digite o tempo gasto (em horas):"))
// Calcula a velocidade média
let velocidadeMedia = distancia / tempo
// Exibe o resultado
document.write(`A velocidade média é ${velocidadeMedia} km/h`)

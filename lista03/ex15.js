// Solicita ao usuário a distância percorrida e o combustível gasto
let distancia = Number(prompt("Digite a distância percorrida (em km):"));
let combustivelGasto = Number(prompt("Digite a quantidade de combustível gasto (em litros):"))
// Calcula o rendimento do combustível em km/l
let rendimento = distancia / combustivelGasto
// Exibe o resultado
document.write(`O rendimento do combustível é ${rendimento} km/l`)

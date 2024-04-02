// Solicita ao usuário a pressão em atmosferas
let pressaoAtm = Number(prompt("Digite a pressão em atmosferas:"))
// Converte a pressão de atmosferas para Pascal
let pressaoPascal = pressaoAtm * 101325 // 1 atm = 101325 Pa
// Exibe o resultado
document.write(`A pressão em Pascal é ${pressaoPascal}`)

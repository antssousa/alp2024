// Solicita ao usuário o volume em litros
let litros = Number(prompt("Digite o volume em litros:"))
// Converte litros para galões usando o fator de conversão
let galoes = litros * 0.264172 // Fator de conversão de litros para galões americanos
// Exibe o resultado
document.write(`O volume em galões é ${galoes}`)

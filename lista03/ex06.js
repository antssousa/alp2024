// Solicita ao usuário a distância em quilômetros
let quilometros = Number(prompt("Digite a distância em quilômetros:"))
// Converte quilômetros para milhas usando o fator de conversão
let milhas = quilometros / 1.60934 // Fator de conversão de quilômetros para milhas
// Exibe o resultado
document.write(`A distância em milhas é ${milhas}`)

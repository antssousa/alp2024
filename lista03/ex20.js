// Solicita ao usuário o comprimento do lado do hexágono
let lado = Number(prompt("Digite o comprimento do lado do hexágono:"))
// Calcula a área do hexágono regular
let area = (3 * Math.sqrt(3) * lado ** 2) / 2
// Exibe o resultado
document.write(`A área do hexágono regular é ${area}`)

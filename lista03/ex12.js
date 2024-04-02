// Solicita ao usuário o ângulo em graus
let graus = Number(prompt("Digite o ângulo em graus:"))
// Converte graus para radianos usando a fórmula de conversão
let radianos = graus * (Math.PI / 180)
// Exibe o resultado
document.write(`O ângulo em radianos é ${radianos}`)

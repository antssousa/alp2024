// Solicita ao usuário o raio e a altura do cilindro
let raio = Number(prompt("Digite o raio do cilindro:"))
let altura = Number(prompt("Digite a altura do cilindro:"))
// Calcula o volume do cilindro
let volume = Math.PI * raio ** 2 * altura
// Exibe o resultado
document.write(`O volume do cilindro é ${volume}`)

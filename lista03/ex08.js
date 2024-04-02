// Solicita ao usuário um número inteiro
let numero = Number(prompt("Digite um número inteiro:"))

// Calcula o logaritmo na base 10 do número e adiciona 1 ao resultado
let quantidadeDigitos = Math.floor(Math.log10(Math.abs(numero))) + 1

// Exibe a quantidade de dígitos
document.write(`O número digitado possui ${quantidadeDigitos} dígitos`)

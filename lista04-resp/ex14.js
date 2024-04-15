/* Calculadora de tarifas. Escreva um programa que calcule o preço do bilhete de um teatro. O preço
padrão é R$ 30,00. Estudantes e idosos pagam meia entrada. Às terças-feiras, todos pagam meia 
entrada. Utilize if, else if, else, e considere o uso de operadores lógicos para combinar condições.
Dica: Comece verificando o dia da semana para aplicar a regra da meia entrada às terças-feiras. Em
seguida, use estruturas if para verificar se o cliente é estudante ou idoso, aplicando as regras de
meia entrada conforme necessário. Use operadores lógicos para simplificar a lógica onde múltiplas
condições podem levar ao mesmo resultado (meia entrada). */
let preco = 30
let dia = prompt('Digite o dia da semana').toLowerCase()
let estudante = prompt('Você é estudante? (s/n)').toLowerCase()
let idoso = prompt('Você é idoso? (s/n)').toLowerCase()

if (dia == 'terça'){
    preco = preco / 2
} else if (estudante == 's' || idoso == 's'){
    preco = preco / 2
}  
document.write(`O preço do bilhete é R$ ${preco}`)



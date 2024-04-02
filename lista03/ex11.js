// Solicita ao usuário a massa do objeto, a altura e a gravidade
let massa = Number(prompt("Digite a massa do objeto (em kg):"));
let altura = Number(prompt("Digite a altura (em metros):"))
// Gravidade padrão na Terra em m/s²
const gravidade = 9.81
// Calcula a energia potencial gravitacional
let energiaPotencial = massa * altura * gravidade
// Exibe o resultado
document.write(`A energia potencial gravitacional é ${energiaPotencial} joules`)

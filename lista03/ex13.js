// Solicita ao usuário a massa e o volume do objeto
let massa = Number(prompt("Digite a massa do objeto (em kg):"))
let volume = Number(prompt("Digite o volume do objeto (em m³):"))
// Calcula a densidade do objeto
let densidade = massa / volume
// Exibe o resultado
document.write(`A densidade do objeto é ${densidade} kg/m³`)

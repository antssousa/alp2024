// Solicita ao usuário a massa do objeto e a aceleração
let massa = Number(prompt("Digite a massa do objeto (em kg):"))
let aceleracao = Number(prompt("Digite a aceleração (em m/s²):"))
// Calcula a força resultante usando a segunda lei de Newton
let forca = massa * aceleracao
// Exibe o resultado
document.write(`A força resultante é ${forca} Newtons`)

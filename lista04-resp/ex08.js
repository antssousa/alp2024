// Solicita ao usuário que digite dois números
let n1 = Number(prompt("Digite o primeiro número:"))
let n2 = Number(prompt("Digite o segundo número:"))

// Solicita ao usuário que escolha a operação (soma, subtração, multiplicação, divisão)
let operacao = prompt("Escolha a operação (soma => + , subtração  => - , multiplicação  => * , divisão => / ):")
// Realiza a operação escolhida e imprime o resultado
switch (operacao) {
    case "+":
        document.write("Resultado: " + (n1 + n2))
        break
    case "-":
        document.write("Resultado: " + (n1 - n2))
        break;
    case "*":
        document.write("Resultado: " + (n1 * n2))
        break
    case "/":
        if (n2 !== 0) {
            document.write("Resultado: " + (n1 / n2))
        } else {
            document.write("Divisão por zero não é permitida.")
        }
        break
    default:
        document.write("Operação inválida.");
}

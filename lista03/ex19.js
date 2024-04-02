// Solicita ao usuário a potência em watts
let watts = Number(prompt("Digite a potência em watts:"))
// Converte a potência de watts para cavalos de potência (hp)
let cavalosPotencia = watts / 746 // 1 cavalo de potência (hp) = 746 watts
// Exibe o resultado
document.write(`A potência em cavalos de potência é ${cavalosPotencia} hp`)

// Solicita ao usuário que digite a idade da pessoa e armazena na variável "idade"
let idade = Number(prompt("Digite a idade da pessoa:"))

// Categoriza e imprime a faixa etária baseada na idade
if (idade >= 0 && idade <= 12) {
    document.write("Criança")
} else if (idade >= 13 && idade <= 18) {
    document.write("Adolescente")
} else if (idade >= 19 && idade <= 60) {
    document.write("Adulto")
} else {
    document.write("Idoso")
}

// Solicita ao usuário que digite a nota do aluno e armazena na variável "nota"
let nota = Number(prompt("Digite a nota do aluno:"))

// Verifica se a nota é suficiente para aprovação e imprime o resultado
if (nota >= 6) {
    document.write("Aluno aprovado.")
} else {
    document.write("Aluno reprovado.")
}

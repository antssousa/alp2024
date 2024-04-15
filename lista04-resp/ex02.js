let idade = Number(prompt('Digite a idade'))

if (idade <= 10) {
    document.write("Infantil");
} else if (idade >= 11 && idade <= 15) {
    document.write("Juvenil");
} else if (idade >= 16 && idade <= 20) {
    document.write("Adolescente");
} else {
    document.write("Adulto");
}

let hora = Number(prompt('Digite a hora'))

if (hora >= 6 && hora < 12) {
    document.write("Bom dia");
} else if (hora >= 12 && hora < 18) {
    document.write("Boa tarde!");
} else {
    document.write("Boa noite!");
}

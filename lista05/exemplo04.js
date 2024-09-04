let inicio = Number(prompt('Digite o começo do intervalo'))
let fim = Number(prompt('Digite o fim do intervalo'))
// inicio --> fim | 7 - 23
let somaPares = 0
let i = inicio

while (i <= fim){
    if (i % 2 == 0){
        document.write(i + ' é par<br>')
        somaPares = somaPares + i
    }
    i++
}

document.write(`A soma dos números pares entre ${inicio} e ${fim} é ${somaPares}`)

let tela = document.getElementById('tela')

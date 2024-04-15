let a = Number(prompt('Digite o 1º lado'))
let b = Number(prompt('Digite o 2º lado'))
let c = Number(prompt('Digite o 3º lado'))

if (a + b > c && a + c > b && b + c > a){
    if (a == b && b == c){
        document.write('Os valores formam um triângulo equilátero')
    } else if ( a == b || b == c || a == c){
        document.write('Os valores formam um triângulo isósceles')
    } else {
        document.write('Os valores formam um triângulo escaleno')
    }
} else {
    document.write(`Os valores não formam um triângulo`)
}
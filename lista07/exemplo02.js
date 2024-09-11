function soma(a, b) {
    return a + b
    
}

console.log(`A soma é ${soma(2, 3)}`)
console.log(`A soma é ${soma(soma(10, 20), soma(20, 30))}`)

function e_primo(n){
    if (n < 2){
        return false
    }
    for(let i = 2; i < Math.sqrt(n); i++){
        if (n % i == 0){
            return false
        }
    }
    return true
}

console.log(e_primo(2))
console.log(e_primo(10))
console.log(e_primo(3))
console.log(e_primo(33))
console.log(e_primo(19))
console.log(e_primo(21))

let n = 97
if (e_primo(n) == true){
    console.log(`${n} é primo`)
} else {
    console.log(`${n} não é primo`)
}

function desenhar_console(caractere, tamanho){
    let desenho = ""
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++){
            desenho += caractere
        }
        desenho += '\n'
    }
    return desenho
       
}

desenhar_console('+', 4)

console.log(desenhar_console('*', 4))
console.log(desenhar_console())





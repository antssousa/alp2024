let n = Number(prompt('Digite um número'))

let div = 0

for(let i = 1; i <= n; i++){
    if (n % i == 0){
        div = div + 1
    }
}

if (div == 2){
    document.write(`O ${n} é primo`)
} else {
    document.write(`O ${n} NÃO é primo`)
}
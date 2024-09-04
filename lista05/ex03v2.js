let n = Number(prompt('Digite um número'))
let primo = true

for(let i = 2; i < Math.sqrt(n); i++){
    if (n % i == 0){
        primo = false
        break
    }
}

if (primo && n >= 2){
    document.write(`${n} é primo`)
} else {
    document.write(`${n} não é primo`)
}
let n = Number(prompt('Digite um número'))

let fatorial = 1

for(let i = n; i > 0; i--){
    // fatorial = fatorial * i
    fatorial *= i
}

// for(let i = 1; i <= 5; i++){
//     fatorial = fatorial * i
// }


document.write(`${n}! = ${fatorial}`)
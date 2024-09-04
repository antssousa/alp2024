let base = Number(prompt('Digite a base'))
let exp = Number(prompt('Digite o expoente'))

let pot = 1

for(let i = 1; i <= exp; i++){
    pot = pot * base
}

document.write(`${base}^${exp} = ${pot}`)
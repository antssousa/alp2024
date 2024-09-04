let n = Number(prompt('Digite um número'))

let fat = 1

let i = n

console.log(`i = ${i} | fat = ${fat}`)
while (i > 0){
    fat = fat * i
    i--
    console.log(`i = ${i} | fat = ${fat}`)
}

document.write(`${n}! = ${fat}`)
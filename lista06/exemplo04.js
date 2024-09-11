for (let i = 0; i < 10; i++) {
    // document.write(`${i}<br>`)
    document.write(i + '-->' + (Math.floor(Math.random() * 100)) + '<br>')
}

let numeros = []

for (let i = 0; i < 10; i++) {
    numeros[i] = Math.floor(Math.random() * 100) 
}

document.write(numeros)
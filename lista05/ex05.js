let n = Number(prompt('Digite um número'))

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        document.write(`${n} `)
    }
    document.write(`<br>`)
}
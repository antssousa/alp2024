let n = Number(prompt('Digite um número'))

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(`${j} `)
    }
    document.write(`<br>`)
}
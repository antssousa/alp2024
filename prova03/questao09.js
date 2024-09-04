 let n = Number(prompt('Digite um número'))

 let ant = 0
 let fib = 1

 for(let i = 0; i < n; i++){
    document.write(`fib(${i + 1}) = ${fib}<br>`)
    let aux = fib
    fib = ant + fib
    ant = aux
 }
let b = Number(prompt('Digite o primeiro cateto'))
let c = Number(prompt('Digite o segundo cateto'))

// a = raizquad(b² + c²)
let a = Math.sqrt(b ** 2 + c ** 2)

document.write(`A hipotenusa é ${a.toFixed(2)}`)

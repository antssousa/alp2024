// Teorema de Pitágoras
// a² = b² + c²
let b = Number(prompt('Digite o valor do 1º cateto'))
let c = Number(prompt('Digite o valor do 2º cateto'))

let a = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2))
document.write(`O valor da hipotenusa é ${a.toFixed(2)} m`)

let sal = Number(prompt('Digite o seu salário'))

// const sal_min = Number(prompt('Digite o valor do salário mínino'))
const sal_min = 1412

let resultado = sal / sal_min

document.write(`O seu salário é equivalente a ${resultado.toFixed(2)} salários mínimos`)
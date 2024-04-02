let b = Number(prompt('Informe a base menor'));
let B = Number(prompt('Informe a base maior'));
let h = Number(prompt('Informe a altura'));

let area = ((b + B) * h)/2

document.write(`Área do trapézio é ${area.toFixed(2)} m²`)
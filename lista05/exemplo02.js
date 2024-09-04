// Somar os números naturais de 1 até 100

document.write('-------------FOR-------------<br>')
let soma = 0
for(let i = 1; i <= 100; i++){
    soma = soma + i
}
document.write(`A soma é ${soma}`)

document.write('<br>-------------WHILE-------------<br>')
soma = 0
j = 1
while(j <= 100){
    // soma = soma + j
    soma +=  j
    j++
}   
document.write(`A soma é ${soma}`)

document.write('<br>-------------DO - WHILE-------------<br>')
soma = 0 
k = 1
do{
    soma = soma + k
    k++
}while( k <= 100)
document.write(`A soma é ${soma}`)
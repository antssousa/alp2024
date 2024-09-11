function gera_vetor(tamanho, range = 10){
    let vetor = []
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = Math.floor(Math.random() * range)       
    }
    return vetor
}

let v1 = gera_vetor(10, 100)
let v2 = gera_vetor(10, 100)

let v3 = []

for (let i = 0; i < v1.length; i++) {
    v3.push(v1[i])    
    v3.push(v2[i])    
}

document.write(`v1 = [${v1}]<br>`)
document.write(`v2 = [${v2}]<br>`)
document.write(`v3 = [${v3}]<br>`)
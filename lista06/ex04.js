let v1 = []
let v2 = []

for (let i = 0; i < 10; i++) {
    v1[i] = Math.floor(Math.random() * 10)    
    v2[i] = Math.floor(Math.random() * 10)    
}

document.write(`v1 = [${v1}]<br>`)
document.write(`v2 = [${v2}]<br>`)

let novo = []

for (let i = 0; i < v1.length; i++) {
    if (!novo.includes(v1[i])){
        novo.push(v1[i])
    }
    if (!novo.includes(v2[i])){
        novo.push(v2[i])
    }   
}

document.write(`novo = [${novo}]`)
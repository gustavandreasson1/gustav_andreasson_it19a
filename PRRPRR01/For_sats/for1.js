let p_talserie1 = document.querySelector("#talserie1")
let p_talserie2 = document.querySelector("#talserie2")
let p_summa = document.querySelector("#summa")
let summa = 0

for (let i=1; i<=10; i++){
    p_talserie1.innerHTML += `${i} `
}


for (let j=10; j>0; j--){
    p_talserie2.innerHTML += `${j} `
}



for (let i = 0; i<10; i++){
    console.log(` ${i} I will not write all over the walls`)
}


for (let i=0; i<=10; i++){
    p_summa.innerHTML += `${i}+`
    summa += i
}

p_summa.innerHTML += `1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = ${summa}`

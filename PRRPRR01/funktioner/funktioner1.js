let name = "Gustav"

function sayHello(){
    let age = 17
    console.log(`Hej ${name}, du är ${age} år gammal`)
}


sayHello()
sayHello()


function addera(tal1, tal2){
    let summa = tal1+tal2
    return summa
}

console.log(`2+5=${addera(2,5)}`)


function subtrahera(tal1,tal2){
    let summa = tal1-tal2
    return summa
}

console.log(`9-3=${subtrahera(9,3)}`)

function multiplicera(tal1,tal2){
    let summa = tal1*tal2
    return summa
}

console.log(`10*5=${multiplicera(10,5)}`)

function dividera(tal1,tal2){
    if (tal2 == 0){
        return "får ej dela med 0"
    } 
    let summa = tal1/tal2
    return summa
}


console.log(`40/7=${dividera(40,0)}`)

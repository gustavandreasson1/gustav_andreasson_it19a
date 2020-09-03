console.log("hej")

let name = "Gustav"
let age = "17"


//if-sats - att göra val
if (age >=18){
    console.log("Du är vuxen")
} else {
    console.log("Du är barn")
}


console.log(`Hej ${name} du är ${age} år gammal`)


let text = document.querySelector("#text")
text.innerHTML = (`${name} är ${age} år gammal`)


let mult = document.querySelector("#multiplikation")
let div = document.querySelector("#division")
let add = document.querySelector("#addition")
let sub = document.querySelector("#subtraktion")

mult.innerHTML = `multiplikation`
div.innerHTML = `division`
add.innerHTML = `addition`
sub.innerHTML = `subtraktion`


//Skapa variabel för knappen
let button = document.querySelector("#knapp")

//Skapa eventlyssnare till knappen
button.addEventListener("click", math)

function math(event){
    console.log("math-funktionen körs")
    
    let num1 = parseFloat(document.querySelector("#number1").value)
    let num2 = parseFloat(document.querySelector("#number2").value)
    
    add.innerHTML = `${num1}+${num2}=${num1+num2}`
    sub.innerHTML = `${num1}-${num2}=${num1-num2}`
    mult.innerHTML = `${num1}*${num2}=${num1*num2}`

}
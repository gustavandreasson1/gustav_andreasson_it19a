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
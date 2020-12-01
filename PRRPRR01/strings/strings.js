console.log("Strings")

// konkatenering

let fornamn = "Gustav"
let efternamn = "Andreasson"
let namn = fornamn + " " + efternamn
let adress = "Hövägen 78"
let telefon = "0725388005"
let alder = "17"

console.log(namn + "\n" + adress + "\n" + telefon + "\n" + alder)

let p_uppgifter = document.querySelector("#personuppgifter")

p_uppgifter.innerHTML = "Namn: " + namn + "<br>" + "Adress: " + adress + "<br>" + "Telefon: " + telefon + "<br>" + "Ålder: " + alder 

let alfabet = "abcdefghijklmnopqrstuvwxyzåäö" 
let bokstav1 = alfabet[0]
let bokstav5 = alfabet[4]

console.log(`Bokstav på index 0 är: ${bokstav1}`)
console.log(`Bokstav på index 4 är: ${bokstav5}`)

let antal_bokstaver = alfabet.length
console.log(`Antal bokstäver i alfabetet är ${antal_bokstaver}`)

// Jag läser IT-programmet på NTI Kronhus i Göteborg



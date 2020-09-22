console.log("Hej detta är en if_sats lektion2")

// Skriv ett program som låter användaren mata in sin ålder. Programmet ska avgöra om personen får kolla på en 15-årsgräns film //

let age = prompt("Hur gammal är du?")

if (age >= 15){
    console.log("Du får kolla på 15-årsgräns filmen")
} else {
    console.log("Du får inte kolla på 15-årsgräns filmen")
}

if (age >= 7){
    console.log("Du får kolla på 7-årsgräns filmen")
} else {
    console.log("Du får inte kolla på 7-årsgräns filmen")
}

if (age >= 18){
    console.log("Du får kolla på 18-årsgräns filmen")
} else {
    console.log("Du får inte kolla på 18-årsgräns filmen")
}

// Spårvagnsresor, månadskort


let antal = prompt("Hur många gånger åker du spårvagn i månaden?")

if (antal >= 28){
    console.log(`Du åker spårvagn för ${antal}*${30}kr i månaden och det är värt för dig att köpa ett månadskort`)
} else {
    console.log(`Du åker spårvagn för ${antal}*${30}kr i månaden och det är inte värt för dig att köpa ett månadskort`)
}   
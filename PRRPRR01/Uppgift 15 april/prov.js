let tal = prompt("Hur lång är kvadraten i cm?")

let area = tal**2

console.log(`Arean på rektangeln är:${area}`)

if (area > 0 && area < 11){
    console.log("Liten area")
}   else if (area > 10 && area < 21){
    console.log("Mellan area")
} else {
    console.log("Stor area")
}


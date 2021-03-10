let slumptal = Math.random()

console.log(slumptal)

let coinflip = Math.round(slumptal)

console.log(`Coin flip: ${coinflip}`)

if (coinflip == 1) {
    console.log("head")
} else if (coinflip == 0) {
    console.log("tails")
}

document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 6) + 1;

for (let i = 0; i < 100; i++){
    let tärning = Math.floor(Math.random()*6)+1

    if (tärning === 6)
}
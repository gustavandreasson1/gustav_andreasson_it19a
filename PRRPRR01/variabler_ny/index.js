let age = prompt("Hur gammal är du?")
let name = prompt("Vad heter du?")
let adress = prompt("Vad är din adress?")
let postnummer = prompt("Vad är ditt postnummer?")
let city = prompt("Vilken stad bor du i?")
let number = prompt("Vad är ditt telefonnummer?")

let p_age = document.querySelector("#age")
let p_name = document.querySelector("#name")
let p_adress = document.querySelector("#adress")
let p_postnummer = document.querySelector("#postnummer")
let p_city = document.querySelector("#city")
let p_number = document.querySelector("#number")

p_name.innerHTML = `Namn: ${name}`
p_age.innerHTML = `Ålder: ${age}`
p_adress.innerHTML = `Adress: ${adress} ${postnummer} ${city}`
p_number.innerHTML = `Telefonnummer: ${number}`


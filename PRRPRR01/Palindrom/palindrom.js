let knapp = document.querySelector("#knapp")
let p_rak = document.getElementById("rak")
let p_reverse = document.getElementById("reverse")
let p_result = document.getElementById("result")



knapp.addEventListener("click", palindrom)

 function palindrom() {

    let string = document.querySelector("#input").value
    let res = string.split("");

    p_rak.innerHTML = string
    let rev = string.split("").reverse()
    

    p_reverse.innerHTML = rev.join("")

    if (res.join("") === rev.join("")){
        
        p_result.innerHTML = "Palindrom"
        p_result.style.color = "green"
    } else {
        
        p_result.innerHTML = "Inte en palindrom"
        p_result.style.color = "red"
    }


}
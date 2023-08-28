const body = document.body
const head = document.head
const btn = document.querySelector("button")
const inputName = document.querySelector("input")
btn.addEventListener("click", function(e){
    var array = ["green", "blue", "pink", "red", "brown"]
    if (inputName.value.trim() === ""){
        console.log("error")
    } else {
        if (array.includes(inputName.value.trim().toLowerCase())) {
            body.style.backgroundColor = inputName.value.trim().toLowerCase()
            inputName.value = ""
        }
        else {
            inputName.value = ""
        }
    }
})

inputName.addEventListener("keypress", (e) => {
    console.log(inputName.value)
})
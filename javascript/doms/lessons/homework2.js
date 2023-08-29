const body = document.body
const head = document.head
const btn = document.querySelector("button")
const addBtn = document.getElementById("add")

var array = ["green", "blue", "purple", "pink", "yellow", "brown", "coral"]

function changeColour(e) {
    var generator = Math.floor(Math.random()*array.length)
    body.style.backgroundColor = array[generator]
}
btn.addEventListener("click", changeColour)
addBtn.addEventListener("click", question)
/* 
Web ask user for colour
now the generator appends colour in the array

1. If the prompt has no value don't store in the variable
2. If the colour already exists respond back to say it exists
3. If the colour doesn't exist background shouldn't change
4. #
*/
/*
var res = prompt("what colour would you like to add to the background?") //anything inside a prompt is converted into a string
console.log(res.length > 0)
if (res.length > 0) {
    colour(res)
}
*/
function colour(colour) {
    if (array.includes(colour)) {
        alert("colour is in the list")
        question()
    } else {
        array.push(colour)
    }
}

function question() {
    var res = prompt("What colour would you like to add to the background?")
    colour(res)
}

console.log(array)

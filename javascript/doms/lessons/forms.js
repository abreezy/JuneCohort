/* 
1. If name input is empty do not pass the form
2. If name is correct pass, alert back to user
3. Name meet length requirement
4. Check if name is string
5. If errors point that out to user
6. If success point that out to user 
*/

const body = document.body
const head = document.head
const nameInput = document.getElementById("name")
const lastNameInput = document.getElementById("lastName")
const email = document.getElementById("email")
const form = document.querySelector("form")

//const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function checkName() {
    var result = false
    var result2 = false
    var resultEmail = false
    if (nameInput.value.length >= 2 && nameInput.value.length <= 20){
        result = stringRegex(nameInput.value)
        console.log(result)
    }
    if (lastNameInput.value.length >= 2 && lastNameInput.value.length <= 20){
        result2 = stringRegex(lastNameInput.value)
        console.log(result2)
    }
    if (email.value.match(emailPattern)) {
        resultEmail = emailRegex(email.value)
        console.log(resultEmail)
    }
    return {result, result2, resultEmail}
}

function stringRegex(param){
    const pattern = /^[a-zA-Z]+$/
    return pattern.test(param)
}

function emailRegex(param2) {
    return emailPattern.test(param2)
}

// form.addEventListener("submit", function(e){
//     e.preventDefault()
//     var outcome = checkName()
//     if (outcome === true){
//         alert("form passes")
//     } else {
//         alert("form fails")
//     }
// })

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var { result, result2, resultEmail } = checkName();
    if (result && result2 && resultEmail) {
        alert("form passes");
    } else {
        alert("form fails");
    }
})
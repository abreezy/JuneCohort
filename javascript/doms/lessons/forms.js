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
const nameInput = document.getElementById("Name")
const form = document.querySelector("form")

function checkName() {
    var result = false
    if (nameInput.value.length >= 2 && nameInput.value.length <= 20){
        result = stringRegex(nameInput.value)
        console.log(result)
    }
    return result
}

function stringRegex(param){
    const pattern = /^[a-zA-Z]+$/
    return pattern.test(param)
}

form.addEventListener("submit", function(e){
    e.preventDefault()
    var outcome = checkName()
    if (outcome === true){
        alert("form passes")
    } else {
        alert("form fails")
    }
})
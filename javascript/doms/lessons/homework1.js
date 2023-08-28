/*const body = document.body
const head = document.head

body.style.backgroundColor = "Coral"
const title = document.getElementById("title")
let updateName = document.getElementById("dom")
title.innerHTML = "Homework 1 is all about Document Object Manipulation" 
updateName.innerText = "My Name is Abeer Shahid"
*/
// Date
/*const currentDate = new Date()
const day = String(currentDate.getDate()).padStart(2, "0")
const month = String(currentDate.getMonth() + 1).padStart(2, "0")
const year = currentDate.getFullYear()
const formattedDate = day + "/"  + month + "/" + year
const h3Element = document.querySelector("h3")
h3Element.textContent = formattedDate
*/
/*const orderedList = document.createElement("ol")
const codingLanguages = ["HTML", "CSS", "JavaScript"]
codingLanguages.forEach(function(language) {
    const listItem = document.createElement("li")
    listItem.textContent = language
    orderedList.appendChild(listItem)
})
// Adding ordered List
const bodyElement = document.querySelector("body")
const strongElement = document.createElement("strong")
strongElement.textContent = "Coding Languages I am currently learning are:"
bodyElement.appendChild(strongElement)
bodyElement.appendChild(orderedList)
// Adding Button element
const buttonElement = document.createElement("BUTTON")
buttonElement.textContent = "Click Me"
bodyElement.appendChild(buttonElement)
*/
// ***********solution method***************
// declare all variables at top of DOM file, considered good coding practice
const body = document.body
const head = document.head
let titleHeading = document.getElementById("title")
let updateName = document.getElementById("dom")
const date = new Date()
const dateHolder = document.querySelector("h3")
const h4 = document.createElement("h4")
const orderedList = document.createElement("ol")
const listItems1 = document.createElement("li")
const listItems2 = document.createElement("li")
const listItems3 = document.createElement("li")
const btn = document.createElement("button")
dateHolder.innerText = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
// [jan,feb,mar,apr,may,jun,jul,aug,sept,oct,nov,dec]

titleHeading.innerText = "Homework 1 is all about DOMs"
updateName.innerText = "My Name is Abeer"
h4.innerText = "Coding Languages I am currently learning are:"
orderedList.append(h4)
listItems1.innerText = "HTML"
orderedList.append(listItems1)
listItems2.innerText = "CSS"
orderedList.append(listItems2)
listItems3.innerText = "JS"
orderedList.append(listItems3)
body.append(orderedList)
btn.innerText = "Click Me"
body.append(btn)
body.style.backgroundColor = "Coral"




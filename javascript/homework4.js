/* Write a conditional statement that takes into consideration validations (i.e case sensitivity). 
This will be entire up to you as to what the conditional statement is on. (if this does not make sense please refer back to the recording)
*/

var name = "harry"
if (typeof name != "string") {
    console.log("error")
} else if (name.toUpperCase() === "HARRY") {
    console.log("hi HARRY")
} else {
    console.log("whispers: hi harry")
}

// Write a conditional statement that prints whether the phone being used is an Iphone or an android

var phone = "iPhone"
if (typeof phone != "string") {
    console.log("error")
} else if (phone === "android") {
    console.log(`${phone} is an android`)
} else {
    console.log(`${phone} is an iPhone`)
}

/* Write a switch case that checks if the operation is a math operation (+,-,*,/) 
if the options is any of the options given it should give me the result of 2 variables created above the switch case. 
For example. math operation is * and the variables are 250 & 10 then the answer should log 2500
*/

var num1 = 10
var num2 = 10
var num3 = num1 * num2

if (typeof num3 === "number") {
    switch(true) {
        case (num3 === num1 + num2):
            console.log(num3)
            break
        case (num3 === num1 - num2):
            console.log(num3)
            break
        case (num3 === num1 * num2):
            console.log(num3)
            break
        case (num3 === num1 / num2):
            console.log(num3)
            break
        default:
            console.log("error")
    }
}

///Abdulkadir's method
var operation = "addition"


if (typeof operation === "string") {
    switch (operation) {
        case "addition":
            console.log(num1+num2)
            break
        case "subtraction":
            console.log(num1-num2)
            break
        case "multiplication":
            console.log(num1*num2)
            break
        case "division":
            console.log(num1/num2)
            break
        default:
            console.log("don't recognise that operator")
            break
    }
}
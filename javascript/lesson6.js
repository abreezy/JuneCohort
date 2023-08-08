// function purpose
// function parameters
// function manipulation
// return statement

function printAge (age) {

    console.group(age)

}

printAge(25)
function examGrade (p1) {
    if (typeof p1 === "number") {
        switch(true) {
            case (p1 > 90 && p1 < 100):
                console.log("A*")
                break
            case 80:
                console.log("A")
                break
            default:
        }
    } else {
        errorMessage()
    }
}
examGrade(91)

function multiply (p1, p2) {
    console.log(p1 * p2)
}

multiply(20, 30)

// executeFunction(arg) -> function(does function arg) -> goes through function update variables through argument 

function errorMessage() {
    console.log("error from errorMessage function")
}

function multiply(num1, num2) {
    ans = num1 * num2
    return ans 
}

function addition(num) {
    var answer = multiply(5, 10)
    console.log(answer + num)
}
addition(multiply(25, 10))

// create 2 functions, celsius function - this output temp in C and converter function - changes C to Fahrenheit 
function tempCelsius(temp) {
    return temp
}
function tempChangeToF(temp) {
    const fahrenheit = ((temp * 9)/5) + 32
    console.log(fahrenheit)
}

tempChangeToF(0)
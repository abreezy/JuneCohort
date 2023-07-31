// Write a conditional statement to state if hero is a dc character or marvel character. (i.e superman would be dc, spiderman would be marvel).

let hero = "spiderman"
if (hero === "superman") {
    console.log(`${hero} is a DC character`)
}
else if (hero === "spiderman") {
    console.log(`${hero} is a Marvel character`)
}
else {
    console.log(`${hero} not in database`)
}

/* write a conditional statement taking age as variable and what year group they will be in a school
(i.e 11-16 will be secondary school year group, 16-18 college anyone above optional education). 
(if this does not make sense please watch the summary video or the youtube video pasted above) 
*/

let age = 17
if (typeof age != "number") {
    console.log("error")
} else if (age >= 11 && age <= 16) {
    console.log("student is in secondary school")
} else if (age > 16 && age <= 18) {
    console.log("student is in college")
} else if (age > 18) {
    console.log("student is in optional education")
} else {
    console.log("invalid age")
}

/* Create a shopping list of 5 items. Now make a conditional statement that checks if the list contains 5 items only. 
if above 5 print out error and if less than 5 print out error. ( would suggest searching greater than and less than operators)
*/
let array = ["milk", "bread", "eggs", "butter", "sugar"]
if (array.length === 5) {
    console.log("array contains 5 items")
} else if (array.length < 5 || array.length > 5) {
    console.log("error")
}

// Challenge
/* modify the below javascript conditional statement so when the day is in all caps (e.g TUESDAY) 
it still prints the first statement line and not the error statement 
*/

let day = "TUESDAY"
day = day.toLowerCase()
if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    console.log(`${day} is a weekday`)
} else if (day === "saturday" || day === "sunday") {
    console.log(`${day} is a weekend`)
} else {
    console.log("Not possible")
}

// nested conditional
var arr = [1,2,3,4,5]
if(typeof arr != "object") {
    console.log("error")
} else {
    if(arr.length >= 5 && arr.length < 10) {
        console.log("list has correct number of items")
    } else {
        console.log("error incorrect number of items")
    }
}

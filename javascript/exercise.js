// spot the issue

const age = 24
var occupation = "student"

if (age > 21 && occupation === "student") {
    console.log("stable income and you qualify")
} else if (age > 21 && occupation != "student") {
    console.log("no stable income so you do not qualify")
} else {
    console.log("sorry you are too young")
}

/* create a condition statement for grading papers to score 90 and above is A*
score above 80 is A
score above 70 is B
score above 60 is C
and anything below is a fail */

var grade = 76
if (grade >= 90) {
    console.log("A*")
} else if (grade >= 80 && grade < 90) {
    console.log("A")
} else if (grade >= 70 && grade < 80) {
    console.log("B")
} else if (grade >= 60 && grade < 70) {
    console.log("C")
} else {
    console.log("fail")
}
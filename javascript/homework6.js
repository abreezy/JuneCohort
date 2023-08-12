/* Sleep debt calculator
If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal. 
*/

// using prompt() to get the user to input the number of hours slept each night
function sleepDebt() {
    const totalSleep = 56 // total amount of sleep required in a week assuming 8 hours a day is ideal
    console.log("Please enter how many hours you slept each day")
    const prompt = require("prompt-sync")({ sigint: true })
    var mon = prompt("How many hours did you sleep on Monday?")
    console.log(`You slept ${mon} hours.`)
    var tue = prompt("How many hours did you sleep on Tuesday?")
    console.log(`You slept ${tue} hours.`)
    var wed = prompt("How many hours did you sleep on Wednesday?")
    console.log(`You slept ${wed} hours.`)
    var thur = prompt("How many hours did you sleep on Thursday?")
    console.log(`You slept ${thur} hours.`)
    var fri = prompt("How many hours did you sleep on Friday?")
    console.log(`You slept ${fri} hours.`)
    var sat = prompt("How many hours did you sleep on Saturday?")
    console.log(`You slept ${sat} hours.`)
    var sun = prompt("How many hours did you sleep on Sunday?")
    console.log(`You slept ${sun} hours.`)
    const sleep = Number(mon) + Number(tue) + Number(wed) + Number(thur) + Number(fri) + Number(sat) + Number(sun)
    console.log(`You slept a total of ${sleep} hours last week`)
    if (sleep < totalSleep) {
        console.log("You fell",totalSleep - sleep, "hours behind on your sleep last week")
    } else if (sleep === totalSleep) {
        console.log("You have no sleep debt")
    } else {
        console.log("You overslept by", sleep - totalSleep, "hours")
    }
}
sleepDebt()
/* Fahrenheit to kelvin converter
create a function that converts fahrenheit to kelvin
*/
function tempChangeToK(temp) {
    const kelvin = (temp - 32) * 5/9 + 273.15 // formula for conversion from F to K
    console.log(kelvin, "K")
}

tempChangeToK(50)

/* loops page homework into functions
using the previous homework from the [Guest speaker + Homework](https://www.notion.so/Guest-speaker-Homework-00db6598608d462d98dbebdeb04a19f9?pvs=21) 
reanswer the questions using functions
*/

/* Fizzbuzz task (medium)

Using a loop, print numbers from 1 to 100 but here’s the catch, multiple of 3 should print “Fizz” and multiples of 5 should print “Buzz”. Lastly print “FizzBuzz” for multiples of three and five.
*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
} else if (i % 5 === 0) {
    console.log("Buzz")
} else if (i % 3 === 0) {
    console.log("Fizz")
} else {
    console.log(i)
    }
}

/* ## Challenge 2:

Take the following phrase and translate it to a different word depending on vowels shown.
phrase “turpentine and turtles” 
word equivalent "UUEEIEEAUUEE”
Note for every u&e character in the phrase the word equivalent should contain 2 of those characters. 
If it is not a vowel it is not stored in the word equivalent. 
*/

var phrase = "turpentine and turtles" 
var equivalent = ""
for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].toLowerCase() === "a" || phrase[i].toLowerCase() === "e" || phrase[i].toLowerCase() === "i" || phrase[i].toLowerCase() === "o" || phrase[i].toLowerCase() === "u") {
        equivalent = equivalent.concat(phrase[i])
    }
    if (phrase[i].toLowerCase() === "e" || phrase[i].toLowerCase() === "u"){
        equivalent = equivalent.concat(phrase[i])
    }
}
console.log(equivalent.toUpperCase())

/* ### Palindrome Challenge:
Given a word check to see if the reverse of the word is correct (i.e is the word a palindrome). Example words;
eye in reverse is eye thus a palindrome
madam in is reverse is madam thus a palindrome
*/

var word = "eye"
var pal = ""
for (let i = word.length - 1; i >= 0; i--) {
    pal += word[i]
}
console.log(`${word} reversed is ${pal}`)
if (pal === word) {
    console.log(`${word} is a palindrome`)
} else {
    console.log(`${word} is not a palindrome`)
}

/* ### Pin Generator Challenge:
Create a pin that is generator from a length given. E.g Length of 6 the generator must create a pin of length 6 characters
*/

var length = 6
var pin = ""
if (typeof length != "number") {
    console.log("error, wrong data type")
} else {
    for (let i = 0; i < length; i++) {
        var num = Math.floor(Math.random() * length).toString()
        pin += num
    }
    console.log(`Length is ${length}`)
    console.log(`Pin is ${pin}`)
}

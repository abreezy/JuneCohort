/* **Q.1**
supposedly we have a list of numbers [1,2,3,45,90,125,2001,1001]
identify and print the largest number in the array. e.g example above 2001 should be the answer
*/
const array = [1,2,3,45,90,125,2001,1001]
array.sort(function (a, b) {
    return b - a
})
console.log(array[0])

/***Q.2**
lets say we have a word **“thequickbrownfoxjumpsoverthelazydog”** remove every character that appears more than once (will need to search for a method in js that checks if a string holds the same character already). so the answer should reveal **“thequickbrownfxjmpsvlazydg”**]
*/
const phrase = "thequickbrownfoxjumpsoverthelazydog"
function hasRepeats(phrase) {
    phrase = Array.from(new Set(phrase))
    return phrase.join('')
}
console.log(hasRepeats(phrase))

// Q1 solution
console.log(Math.max(...array))
function findLargestValue(array) {
    var list = [0]
    for (let i = 0; i < array.length; i++) {
        if (list[0] < array[i]) {
            console.log(list)
            console.log(list[0] > array[i])
            list.shift()
            list.push(array[i])
        }
    }
    console.log(list)
}
findLargestValue(array)

// Q2 solution
/*var word1 = "thequickbrownfoxjumpsoverthelazydog"
var word2 = []
function repeatedCharacters(word) {
    word = word1.split('')
    for (let i = 0; i < word.length; i++) {
        if (word2.includes(word[i])) {
            console.log("nothing")
        } else {
            word2.push(word[i])
        }
    }
    console.log(word2.join(''))
}
repeatedCharacters(word1)
*/

var word1 = "thisissomethingthatcontainsnothing"
var word2 = []

for (let i = 0; i < word1.split('').length; i++) {
    if (!word2.includes(word1.split('')[i])) {
        word2.push(word1.split('')[i])
    }
}
console.log(word2.join(''))
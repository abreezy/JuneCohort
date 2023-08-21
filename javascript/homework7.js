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
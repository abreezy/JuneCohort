// From you understanding of array create an array with 15 items inside
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(list)
// From the array just created in the above question remove the last item in the array. You cannot alter the original array.
list.pop()
console.log(list)
// Add an item to the end of the list. Cannot alter the original array
list.push('butter')
console.log(list)
// Find the position of the first item, middle item and last item of the list and print them off separately.
console.log(list[0])
console.log(list[6])
console.log(list[list.length-1])
// Modify 3 items in the array and print them off
list[2] = 'three'
list[3] = 'four'
list[4] = 'five'
console.log(list[2])
console.log(list[3])
console.log(list[4])
// Using string interpolation combine 5 different variables together
console.log(`${list[0]} is before ${list[1]}, ${list[2]} is before ${list[3]}. After is ${list[4]}`)
// Delete the 2 items in the array
// delete list[3]
// delete list[1]
// console.log(list)
// delete better used for objects not arrays
list.shift()
console.log(list)
// remove the first item from the array
list.splice(0, 1)
console.log(list)
// add an item to the first position of the array
list.splice(0, 0, 'apple')
list.unshift("biscuit")
console.log(list)
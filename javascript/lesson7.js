// Objects
// What are they
// Purpose?
// Key & Value pairs
// Dot notation and "this"
// Accessign properties updating, deleting, adding
// Constructor

/*const car = {
    name: "bmw",
    color: "black",
    make: 2015,
    type: ["1 series", "m sport"]
}
console.log(car)
car.type[0] = "m150i"
car.color = "white"
car.owner = "john"
console.log(car)

const item = {
    img: "set",
    title: "title of product",
    price: "price of product"
}

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 45,
    fullName: function(firstName, lastName) {
        return this.firstName +" "+ this.lastName
    }
}
console.log(person.fullName()) 
*/

function Person(name, lastName, age, gender) {
    this.firstName = name
    this.lastName = lastName
    this.age = age
    this.fullName = function() {
        return this.firstName +" "+ this.lastName
    }
    if (gender) {
        this.gender = gender
    } else {
        this.gender = "male"
    }
}

const John = new Person("John", "Smith", 45)
console.log(John)
const Abdul = new Person("Abdul", "Mohammed", 25)
console.log(Abdul)
const Jane = new Person("Jane", "Doe", 56, "female")
console.log(Jane)
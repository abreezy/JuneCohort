//..............

// .includes()

var array = [1, 2, 3, 4, 5, 6]

if (array.includes(6)) {
    console.log("array has the number 6")
}

var day = "tuesday"
switch(day.toLowerCase()){
    case "monday":
        console.log(`it's ${day}`)
        break
    case "tuesday":
        console.log(`it's ${day}`)
        break
    case "wednesday":
        console.log(`it's ${day}`)
        break  
    case "thursday":
        console.log(`it's ${day}`)
        break
    case "friday":
        console.log(`it's ${day}`)
        break  
    case "saturday":
        console.log(`it's ${day}`)
        break
    case "sunday":
        console.log(`it's ${day}`)
        break
    default:
        console.log("not possible")
        break
}   

var score = 81

if (typeof score === "number") {
    switch(true) {
        case (score > 90 && score < 100):
            console.log("A*")
            break
        case (score > 80 && score < 90):
            console.log("A")
            break
        default:
            console.log("fail")
    }
}


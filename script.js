let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}


let fName = "Kayode"
let greet = "Hi there"
// Create a function that logs out "Hi there, Kayode!" when called
function greetings() {
    let greeting = greet + "," + ' ' + fName + "!"
    console.log(greeting)
}

greetings()

let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Points() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()
console.log(myPoints)


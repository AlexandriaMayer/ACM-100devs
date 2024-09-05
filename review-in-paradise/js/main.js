// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood = 'balsamic vinegar'

alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let vava = 'Googly-Eyes'

alert(vava[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function drei (a, b, c){
    let d = (a/b)*c
    alert(d)
}
drei(2, 3, 4)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function getCubedRoot(f){
    let g = Math.cbrt(f)
    console.log(g)
}
getCubedRoot(5)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function monthAlert(month){
    // leon wants to do month as strings
    // leon mentions the includes method, is in the coding challenges
    let monthLowerCase = month.toLowerCase()
    if (monthLowerCase ==='june' ||
        monthLowerCase ==='july' ||
        monthLowerCase ==='august'){
        alert("YAY")}
        // leon mentions wanting to add an else-if for the other months, and an else for strings that aren't a month.
    else{
        alert("Booo")}
}
monthAlert(6)

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function counter(num){
    // need to iterate? when in doubt, for loop.
    for (let i = 1; i<=num; i++){
        // leon says some programmers prefer avoiding 'not' logic
        if(i % 5 !==0){
            console.log(i)
        }
    }
        
}
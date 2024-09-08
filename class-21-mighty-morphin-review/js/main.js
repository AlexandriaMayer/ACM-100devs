// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = "CHRISTMAS"
favHoliday = favHoliday.toUpperCase()

console.log(favHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let triPart = "Mizore"

let tri = triPart(tripart.length-3)

console.log(tri)

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function fiveOfThem (nums){
    let oneHundred = 100
    for (let i = 0; i<nums.length; i++){
        let diff = (nums[i]-oneHundred)}
    alert(oneHundred)
}
fiveOfThem([354, 1, 4 , 5, 4])

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function threeOfThem(three){
    console.log(three.max)
    console.log(three.min)
}
threeOfThem([55, 2, 9])

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function coinFlip(flippy){
    if (flippy%2===0){
        alert("Heads")
    }
    else if (flippy%2!==0){
        alert("Tails")
    }
    else{
        alert("oops I dropped it")
    }
    return flippy
}
coinFlip(4)

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function hotToGo(flippy){
    // wait I already did this
}
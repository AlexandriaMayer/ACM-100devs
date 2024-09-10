// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = "CHRISTMAS"
favHoliday = favHoliday.toUpperCase()

console.log(favHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let triPart = "Mizore"

console.log(triPart.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function fiveOfThem (n1, n2, n3, n4, n5){
    let oneHundred = 100 - n1 - n2 - n3 -n4 -n5
    /*for (let i = 0; i<nums.length; i++){
        let diff = (nums[i]-oneHundred)}
        this was easier than expected*/
    alert(Math.abs(oneHundred)) // ok i need to look at the mdn more
}
fiveOfThem([354, 1, 4 , 5, 4])

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function threeOfThem(m1, m2, m3){
    let max = (Math.max(m1, m2, m3))// ok i was close with the syntax
    let min = (Math.min(m1, m2, m3))// oh it's three parameters, not an array with three elements
    console.log(`The lowest number is ${min} and the highest number is ${max}`)
}
threeOfThem(55, 2, 9)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function coinFlip(){
    let result = Math.random()
    if (result<.5){
        return("Heads")
    }
    else{
        return("Tails")
    }
}
console.log(coinFlip())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function hotToGo(flippy){
    for(let i = 1; i<=flippy; i++){
        let result = coinFlip()// ok I was close
        console.log(result)
    }
}
hotToGo(24)

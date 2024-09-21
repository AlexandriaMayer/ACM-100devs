//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arr = [1, 2, 3, 4]
// leon mentions doing a for loop, but I knew about the reduce method. lo and behold, it's what a lot of people are doing.
let arrTotal = arr.reduce((a,b)=>a+b,0);
alert(arrTotal)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let arr2 = [1, 2, 3, 4, 5, 6]
let arrSquared = arr2.map((x) => x^2)
console.log(arrSquared)

//Create a function that takes string
//Print the reverse of that string to the console

function reverseString(longcat){
    let tacgnol = longcat.reverse()
    console.log(tacgnol)
}
reverseString("Longcat")

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindromeCheck(str){
    let strTrimmed = str.trim
    let strLowerCase = strTrimmed

    if (str is palindrome){
        alert("Palindrone detected")
    }
}
function palindromeCheck('Racecar')
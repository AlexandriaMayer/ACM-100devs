//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arr = [1, 2, 4, 5, 7056]
let sum = arr.reduce((a,b)=>a+b, 0)
alert("Sum is " + sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function finallyIveSeenThisTooMuchOnCodeWars(nums){
    let newArr = nums => nums.map(num=>num**2)
    alert ("Square roots are " + newArr)
}
finallyIveSeenThisTooMuchOnCodeWars([455, 2,1, 3, 24, 9])

//Create a function that takes string
//Print the reverse of that string to the console

function ixel(str){
    let reverseStr = str.split("").reverse().join("")
}
ixel("Kumiko Oumae")

//Create a function that takes in a string
//Alert if the string is a palindrome or not


    const palindromeReversed = s => alert(s === s.split("").reverse().join(""))
    
    //console.log(i=i || 0)<0||i>=s.length>>1||s[i]==s[s.length-1-i] && racecar(s,++i);
palindromeReversed("tacocat")

//--- Easy
//create a variable and assign it a number
let n = 30
//minus 10 from that number
n = n - 10
//print that number to the console
console.log(n)
//--- Medium
//create a variable that holds a value from the input

//add 25 to that number

//alert that number

//create a variable that holds the h1

const h1Holder = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

h1Holder.addEventListener('click', sum)

function sum(){
    let inputedVal = document.querySelector('#danceDanceRevolution').value
    console.log(n + Number(inputedVal))
}

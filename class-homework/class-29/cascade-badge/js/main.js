// Arrays
// Your pokemon party order which is a list of pokemon has been leaked to Misty. 
// Please create a function that reverses your list and prints it to the console. 

function reverseOrder(){
    let reversed = order.reverse()
    console.log(reversed)
}
reverseOrder(['pikachu', 'eevee', 'bulbasaur', 'mew', 'mudkip'])

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of 
// the squares of each element in a is strictly greater than the sum of the cubes of each element in b.


function beSquared(a, b){
    let aSquared = a.map((x)=>x*x)
    let bCubed = b.map((y)=>y*y*y)
    let aSum = aSquared.reduce((a, b)=> a+b,0)
    let bSum = bCubed.reduce((a, b)=> a+b,0)
    return aSum < bSum ? console.log("true"): console.log("false")
}

beSquared([33, 1, 2, 3, 5, 9],[3, 4, 6, 91, 6, 7])

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function squaredI(arr){
    let arrAye = []
    for (let i = 0; i < arr.length; i++){
        arrAye.push(arr[i]*i)
    }
    console.log(arrAye)
}
squaredI([2, 3, 5, -2, -9, 100])

// I didn't read the instructions well.

function multiI(theArr){
    return theArr.filter((f, j)=> f % j === 0)
}
multiI([343, 4, 3, 8, 9, 55, 9, 9, 9])

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
function sumNums(hazel){
    console.log(hazel.reduce((a,c)=> a+Number(c), 0)) 
}
sumNums([555, 2, -445, "45", "98", "93.234", 1])
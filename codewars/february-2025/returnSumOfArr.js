// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// P: Okay, so all the array elements are numbers and string numbers? No alphabeticals or special characters? Do we have any floats?
// yes

// And the return is a single number, the sum of all the numbers within the array

// For the example [2, 2], the return should be 4
// and in the example [2, 2, "2"], the return should be 6?

// okay!!!

function returnSum(arr){
    let nums = []
    for (let i = 0; i < arr.length; i++){
        nums.push(Number(arr[i]))
    }
    let sum = nums.reduce((a,c) => a + c, 0)
    console.log(sum)
}
returnSum([2, 3, "4", "-5", 6, 7])

// gah i'm so out of it right now

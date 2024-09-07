/*Create a function that takes in an array of numbers. 
Return a new array containing every even number from the original array (do not use map or filter)*/

function winterGames (arr){
    let evens = []
    // okay, so we name a variable 'n', and use the push function to add it to the array
    arr.forEach(n => {
        if (n%2 ===0){
            evens.push(n)
        }
    })
    return evens
    
    /*for (let i = 0; i<arr.length; i++){
        if (arr[i] % 2 === 0){
            return arr[i]
        }
        else if (arr[i] % 2 !==0){
            console.log("That's odd")
        }
        else{
            console.log("That's not a number")
        }
    }*/
}
winterGames([344, 21, 12, 4, 1944, 3, 91, 913])
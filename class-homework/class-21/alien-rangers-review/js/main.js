//Arrays

//Create and array of tv shows. Loop through and print each show to the console
function television(){
    let shows = ['The L Word', 'Sound!Euphonium', 'Bocchi the Rock!', 'K-On!', 'Nichijou', 'Laid Back Camp']
    /*for (i=1; i<shows.length();i++){
        console.log(shows[i])
    }*/
    shows.forEach(x=>console.log(x))
}


//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

function evenArray(nums){
    if (nums[i]%2===0){
        return nums
    }
    else{
        console.log('how odd')
    }
    let newNums = nums

}
evenArray([48558, 294, 1, 4, 3, 4, 1050, 1, 9])

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function minAndMax(arr){
    // alternatively

    let sorted = arr.sort((a,b)=> a - b)// almost the same thing, less filtering, but it's pretty neat
    alert(sorted[1] + sorted[sorted.length-2]);
    
    /*
    arr.sort(function(x, y){
        return x - y
    })
    let sortedArr = [arr[0]]
    let result = []
    for (let i = i; i<arr.length; i++){
        if (arr[i-1] !== arr[i]){
            sortedArr.push(arr[i]);
        }
    }
    result.push(sortedArr[1], sortedArr.length-2);

    return result.join(',');
*/}
console.log(minAndMax([553, 3, 1, 5, 5, 27]));

//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function toodle(array){
    //for(let i = 1; i<array.length();i++){let product = product * array[i]}
    array.forEach(num => product *=num)
    alert(product)
}
toodle([3, 2, 5, 2, 16, 94, -2, -4, 1, 7])
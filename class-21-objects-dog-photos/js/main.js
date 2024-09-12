//Get a dog photo from the dog.ceo api and place the photo in the DOM

// acm: oh okay so this is API practice. Maybe I should do some research and try it out.

// but first, I want to do the exercises for https://javascript.info/array-methods

/*Filter range
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or 
equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
 */

function filterRange(arr1, a, b){
    let arr1 = [534, 1, 4, 14 , 9, 76]
    let filtered = arr.filter(arr, 3, 100);
    alert(filtered)
    alert(arr1)
}
filterRange()

/*Filter range "in place"
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that 
are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/

function filterRangeInPlace(arr, a, b){
    let arr=[532, 3, 555, 9, 397, 100, 44]}
    alert(arr)
filterRangeInPlace(arr, 5, 200)

/* sort in decreasing order*/

function sortArr(arr3){
    let arr3=[1455, 343, 333, 5, 9, 1, -5, -9999, 404, 54]
    arr3.sort(function(a, b){return b-a});// apparently this will return the sort in descending order
    alert(arr3)}




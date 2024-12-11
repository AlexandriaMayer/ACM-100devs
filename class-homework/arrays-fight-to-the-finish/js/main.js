//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Mean Girls', 'Independence Day', 'Finding Nemo', 'How to Train Your Dragon', 'Avatar', 'Bottoms', 'Barbie', 'Oppenheimer']
function movieLoop(){
    for(let i = 0; i <movies.length; i++){
        document.querySelector('h2').innerText += movies[i]
    }}
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [6, 24, 11, 2, 11, 22, 5, 28, 23, 9, 20, 22]

numbers.forEach((item, i) => {
    numbers[i] = item+3
})

//Find the average of all the numbers from question three

let sum = 0
let div = 0

for (let i = 0; i< numbers.length; i++){
    sum = sum + nums[i]
}
div = (sum/numbers.length)
console.log(div)

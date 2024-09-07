// *Variables*
// Declare a variable, assign it a boolean, and alert the value

let tootle = true
alert(tootle)


// Declare a variable, reassign it to your favorite color, and console log the value

let color = "Sage Green"
console.log(color)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function spade(a1, a2, a3, a4){
    let hearts = ((a1+a2+a3)/a4)
}
spade(4, 2, -5, -2)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function spike(b1, b2){
    console.log(b1^b2)
}
spike(3, 2)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function samatha(ghost, yarn){
    if (ghost == true){
        alert(yarn)
    }
    else (ghost == false);
    {
        console.log(yarn)
    }
}

samatha(true, "Pickles")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, 
// but if the number is divisible by 3 log "fizz" instead of that number, if the number is 
// divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzbuzz(num){
    Range(1, num)
    if (num % 3==0 || num % 5==0){
        console.log("fizzbuzz")
    }
    else if (num % 3==0){
        console.log("fizz")
    }
    else if (num % 5==0){
        console.log("buzz")
    }
    else
        console.log('spaghetti')
}

function dylan(name){
    name.push('Natasha')
    return name
}
dylan(['Brett-Morgan','Tyler','Dylan'])

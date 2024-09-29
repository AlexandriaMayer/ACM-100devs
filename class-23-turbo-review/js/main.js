// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
function oumae(awa){if (awa.includes("?")){
    alert("Yes?")
}
else{
    alert("Ok")
}}
oumae("Nani?")
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
function replacable(word){
    let word_fixed = word.replaceAll("jr. dev", "software engineer")
    console.log(word_fixed)
}
replacable("I'm Lexi, and I'm a jr. dev. Nice to meet you!")


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    console.log("required viewing https://www.youtube.com/watch?v=WhquiIVkVww")
    let roll = Math.random()
    if (roll <= .33){
        console.log("Rock")
    }
    else if (roll > .34 && roll <=.66){
        console.log("Paper")
    }
    else if (roll >.67 && roll <.99){
        console.log("Scissors")
    }
    else if (roll >=.99){
        console.log("Tie!")
    }
    else{
        console.log("oops")
    }
}
rockPaperScissors()
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(hakaseChoice){
    let nanoChoice = rockPaperScissors()
    if ((hakaseChoice === "Rock" && nanoChoice === "Scissors") ||
    (hakaseChoice === "Scissors" && nanoChoice === "Paper") ||
    (hakaseChoice === "Paper" && nanoChoice === "Rock")){
        console.log("You win!")
    }
    else if (hakaseChoice === nanoChoice){
        console.log("Tied!")
    }
    else{
        console.log("You lose!")
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGamesManyTimes(arr){
    arr.forEach(hakaseChoice =>checkWin(hakaseChoice))
}
playGamesManyTimes(["Rock", "Paper", "Scissors"])
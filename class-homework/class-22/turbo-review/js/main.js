// *Variables*
/* Declare a variable and assign it to your fav drink as a string. 
Make sure there is no whitespace on either side of the string, and print the value to the console*/

let favoriteDrink = " Peppermint Tea "
favoriteDrink = favoriteDrink.trim()
console.log(favoriteDrink)


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let brat = "360 club classics sympathy is a knife i might say something stupid talk talk von dutch everything is romantic rewind so i girl, so confused apple b2b mean girls I think about it all the time 365"
/*function bratSummer(brat){
    if(brat.includes("apple")){
        console.log("the apple doesn't fall far from the tree")
    }
    else{
        console.log("we will install windows 11 during off-peak hours")
    }
}
bratSummer(brat)*/

// leon uses console.log(brat.search('apple'))

if(brat.search('apple') !==1){
    console.log("the apple doesn't fall far from the tree")
}else{
    console.log("we will install windows 11 during off-peak hours")
}


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let roll = Math.random()
    if (roll<.33){
        console.log("rock")
    }
    else if (roll >= .33 && roll <.66){
        console.log("paper")
    }
    else if (roll >=.66 && roll <=.99){
        console.log("scissors")
    }
    else if(roll >.99){
        console.log("draw")
    }
}
rockPaperScissors()

// *Conditionals*
/*Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors 
against a bot using the above function*/

function checkWin(hakaseChoice){
    // first comes the rock, what's going to be?
    // rock paper scissors and one, two, three!
    // https://www.youtube.com/watch?v=WhquiIVkVww

    let nanoChoice = rockPaperScissors()
    if ((hakaseChoice === 'rock' && nanoChoice === 'scissors') || 
        (hakaseChoice === 'paper' && nanoChoice === 'rock') ||
        (hakaseChoice === 'scissors' && nanoChoice === 'paper')){
            console.log('You win!')
    }
    else if(hakaseChoice === nanoChoice){
        console.log('You tied')
    }
    else{
        console.log('You lose')
    }
}
checkWin('rock')

/*function competitiveRockPaperScissors(roll2){
    let user = InputEvent("What's your choice? 'r' for rock, 'p' for paper, 's' for scissors\n")
    let computer = math.random()
    // first comes the rock, what's going to be?
    // rock paper scissors and one, two, three!
    // https://discord.com/channels/735923219315425401/737449729977352234/1286480689159737492
    if (user===computer){
        alert("It's a tie!")
    }
    else if (user, computer){alert("You win!")}
    else{
        alert("You lost!")
    }
}*/
/*function isWin(player, opponent){
    if (player === 'r' && opponent === 's') || (player === 's' && opponent === 'p')
    || (player === 'p' && opponent === 'r');
    return true
}*/
//*Loops*
/*Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. 
Print the results of each game to the console.*/

function playGamesManyTimes(arr){
    arr.forEach(hakaseChoice => checkWin(hakaseChoice))
}
playGamesManyTimes(['rock', 'paper', 'scissors'])

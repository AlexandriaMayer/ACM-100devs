//Create a conditonal that checks their age
//If under 16, tell them they can not drive
let age = "17"
if (age < 16){
    console.log("You're too young to drive")
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
else if (age < 18 ){
    console.log("You're too young for the club. You can't even hate from the outside.")
}
//If under 21, tell them they can not drink
else if (age < 21){
    console.log("You're too young to drink")
}
//If under 25, tell them they can not rent cars affordably
else if (age < 25){
    console.log("Renting cars is going to be really expensive for you")
}
//If under 30, tell them they can not rent fancy cars affordably
else if (age < 30){
    console.log("You can't afford to rent fancy cars")
}
//If under over 30, tell them there is nothing left to look forward too
else if (age >= 30){
    console.log("You have nothing left to look forward to. It's so over.")
}


//--- Harder
//On click of the h1
const h1Holder = document.querySelector('h1')
h1Holder.addEventsListener('click', growing)
//Take the value from the input
function growing(){
    let inputedAge = document.querySelector('#danceDanceRevolution').value
    document.querySelector('#placetexthere').innertext=inputedAge}
    //return inputedAge}
//Place the result of the conditional in the paragraph
//document.querySelector('#placetexthere').innertext=`${inputedAge}`

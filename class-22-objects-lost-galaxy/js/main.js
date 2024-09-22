//Create a mouse object that has four properties and three methods

// constructor method (oops leon didn't want us to use this method)
function MakeAMouse(mouseName, mouseAge, mouseColor, mouseSize){
    this.name = mouseName
    this.age = mouseAge
    this.color = mouseColor
    this.size = mouseSize
    // size is height in centimeters
    this.noise = function(){
        alert("Squeak!!!")
    }
    this.greetings = function(){
        alert(`I'm ${this.name}! Nice to meet you!`)
    }
    this.age = function(){
        if (this.age < 0.2){
            alert("I'm young!")
        }
        else if (this.age > 0.2 && this.age < 2.5){
            alert("I'm fully grown!")
        }
        else if (this.age > 2.5 && this.age < 3.5){
            alert("I'm getting quite old")
        }
        else if (this.age > 95 && this.name === "Steamboat Willie"){
            alert("I'm in the public domain!")
        }
        else (this.age > 3.5)
        {
            alert("Guess I'm immortal")
        }
    }
}
let steamBoatWillie = new MakeAMouse("Steamboat Willie", 96,"Black & White",110)
let niel = new MakeAMouse("Neil", 18, "Pink", 20)
let caroline = new MakeAMouse ("Caroline", 2.2, "Brown", 8)

let rat = {}
rat.name = "Puma"
rat.age = 96
rat.color = "Brown"
rat.size = 210
// size in cm
rat.organic = false


function rattyTank(rat){
    if (rat.ratSize > 100 & rat.organic === false){
        alert("That's not a rat, that's a tank")
        return rat
    }
}
function ratColor(rat){
    if (rat.ratColor.toLowerCase === "pink"){
        alert("Is your rat hairless?")
    }
}
function ratJob(rat){
    if (rat.ratJob.toLowerCase === "chef" && rat.Name.toLowerCase === "Remy"){
        alert("star of the show")
    }
}
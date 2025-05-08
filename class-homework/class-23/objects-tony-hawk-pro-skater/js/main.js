//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function ProSkater (name, gender, stance, skill){
    this.name= skaterName
    this.gender= skaterGender
    this.stance= boardStance
    this.skill = skillLevel
    function ollie(x){
        if (x==true){
            console.log("Ollie")
        }
    }
    function kickflip(square, rightArrow){
        if (square == true & rightArrow == true){
            console.log("Did a kickflip")
        }
    }
    function sayMyName(skaterName){
        console.log(`Hi, I'm ${this.name}, let's skate!`)
    }
}
let rodneyMullen = new ProSkater("Rodney Mullen","Male","Regular", 3)

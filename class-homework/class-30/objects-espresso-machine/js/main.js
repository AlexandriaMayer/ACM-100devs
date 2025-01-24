//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class ExpressMachine{
    constructor(coffeeBeans, temperature, waterFeed, expressoCup, milk){
        this.coffee = coffeeBeans
        this.temp = temperature
        this.water = waterFeed
        this.cup = expressorCup
        this.milch = milk}
    brew(coffee, temp, water){
        if (coffee == "ready" && (temp < 190 && temp > 206) && water === "ready"){
            theBrew = "ready"
        }
        else{theBrew = "not ready"}
    }
    pour(theBrew, expressoCup){
        if (theBrew === "ready" && cup === "present"){
            console.log("pouring expresso")
        } else if (theBrew === "not ready" && cup === "present"){
            console.log("no expresso :(")
        } else if (theBrew === "ready" && cup === "not present"){
            console.log("oops pouring expresso onto the machine")
        } else{
            console.log("not ready to pour")
        }
    }
    steamMilk(milch, temp){
        if (milch === "present" && (temp > 140 && temp < 150)){
            console.log("steaming milk")
        }
        else if (milch === "not present" && (temp > 140 && temp < 150)){
            console.log("no milk!!!")
        }
        else if (milch = "present" && temp < 140){
            console.group("milk too cold")
        }
        else if (milch = "present" && temp > 150){
            console.group("milk too hot!")
        }
        else{
            console.log("not ready")
        }
    }
}

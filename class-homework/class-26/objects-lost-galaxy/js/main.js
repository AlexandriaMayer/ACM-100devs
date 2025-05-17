//Create a dog object that has four properties and three methods

function PizzaMaker(size, crust, sauce, cheese, slice){
    this.size = pizzaSize
    this.crust = pizzaCrust
    this.sauce = pizzaSauce
    this.cheese = pizzaCheese
    this.slice = numOfSlices
    function addCheese(pizzaCheese){
        if(input === 'add'){
            let moreCheese = pizzaCheese += pizzaCheese
        }
    }
    function removeCheese (pizzaCheese){
        if (input === 'remove'){
            let lessCheese = pizzaCheese -= pizzaCheese
        }
    }
    function calorieCount(pizzaSize, pizzaCrust, pizzaSauce, pizzaCheese){
        let calories = ((pizzaCrust*pizzaSize)+(pizzaSauce*pizzaSize)+(pizzaCheese*pizzaSize))/numOfSlices
        // this isn't accurate but bear with me
        // basically, the parameters should be a dictionary. sauceType(str)/calories(int per unit)/other attributes
    }
}

let pizza = {}

pizza.size = 14 // radius in inches
pizza.toppings = ['mushroom', 'bell pepper', 'roma tomato', 'olives', 'pepperoni', 'garlic']
pizza.crust = "thin" // leon I am right
pizza.sauce = ['red', 'normal']

pizza.delieveryTime = function(){
    console.log("it is x minutes away")
    // probably some api reqest for a navigation app + internal kitchen management software
}
pizza.yum = function(){
    console.log("I love this")
}
pizza.rating = function(){
    console.log("not as good as japanese nepotalian pizza")
}

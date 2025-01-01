class Dog {
    constructor(dogName, dogBreed, dogHeight){
        this.name = dogName
        this.species = dogBreed
        this.size = dogHeight}
    bark(size){
            if (this.size > 60){
                let dogBark = "Grrr! Grrr!"
                return dogBark
            }
            else {
                let dogBark = "Woof! Woof!"
                return dogBark
            }
            
        }
}


const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

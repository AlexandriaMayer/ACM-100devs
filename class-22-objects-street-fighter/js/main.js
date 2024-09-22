//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function WeWillFight(characterName, characterGender, characterSpecies, statAttack, statDefense, statHealth){
    this.name = characterName
    this.gender = characterGender
    this.species = characterSpecies
    this.attack = statAttack
    this.defense = statDefense
    this.health = statHealth
    function sayMyName(name){
        alert(`${name} is ready to fight!`)
    }
    function glassCannon (name, attack, defense){
        if (attack/(defense+health) > 12 ){
            console.log("Totally a glass cannon")
        }
    }
    function characterKO(health, name){
        if (health <= 0){
            alert (`${name} has been Knocked Out`)
        }
    }
}
let leroy = new WeWillFight("LeRoy Jinkens", "Male", "Human", 100, 10, 50)
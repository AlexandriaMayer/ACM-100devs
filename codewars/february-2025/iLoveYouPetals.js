function howMuchILoveYou(nbPetals) {
    if (nbPetals%6 == 1){
      return "I love you"
    }
    else if (nbPetals % 6 == 2){
      return "a little"
    }
    else if (nbPetals % 6 == 3){
      return "a lot"
    }
    else if (nbPetals % 6 == 4){
      return "passionately"
    }
    else if (nbPetals % 6 == 5){
      return "madly"
    }
    else if (nbPetals % 6 == 0){
      return "not at all"
    }
}


// this made me giggle a lot >///<

// tried to do the array method but the syntax was off

// the correct syntax is return phrases[(n - 1) % phrases.length] 

function  calculateAge(year, birthYear) {  
  if (year - birthYear == 0){
    return "You were born this very year!"
  }
  else if (birthYear - year == -1){
    return "You will be born in 1 year."
  }
  else if (birthYear - year == 1){
    return "You are 1 year old."
  }
  else if (birthYear - year < -1){
    return `You will be born in ${Math.abs(birthYear - year)} years.`
  }
  else if (birthYear - year > 1){
    return `You are ${Math.abs(birthYear - year)} years old.`
  }
}

// yis I figured it out!!!

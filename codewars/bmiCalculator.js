function bmi(weight, height) {
  if ((weight/height**2)>30){
    return "Obese"
  }
  else if ((weight/height**2)<=30 && (weight/height**2)>25){
           return "Overweight"
           }
  else if ((weight/height**2)<=25 && (weight/height**2)>18.5){
    return "Normal"
  }
  else{
    return "Underweight"
  }
  ;
}

// not hard

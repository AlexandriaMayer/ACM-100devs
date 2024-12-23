function xor(a, b) {
  if (a == true && b == false){
    return true
  }
  else if (a == false && b == true){
    return true
  }
  else{return false} 
}

// this is different - usually true is only true if both are true. here, one has to be false and the other true to be true. double false and double true are false.

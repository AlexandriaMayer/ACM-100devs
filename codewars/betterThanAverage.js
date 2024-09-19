function betterThanAverage(classPoints, yourPoints) {
    // as I expected, classPoints is an array
    // idk if there's an average function, but I'll stick with what I know: sum and length
    // ok we can't just sum, we have to do a reduce function
    let initialValue = 0;
    let classTotal = classPoints.reduce((a, b)=>a+b, initialValue);
    let classAverage = classTotal/classPoints.length
    if (classAverage < yourPoints){
      return true
    }
    else{
      return false
    }
  }

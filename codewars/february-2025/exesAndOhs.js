function XO(str) {
    let xCount = 0;
    let oCount = 0;
    for(let i = 0; i < str.length; i++){
      if (str[i].toLowerCase() == "o"){
        oCount++
      }
      if (str[i].toLowerCase() == "x"){
        xCount++
      }
    }
    return xCount == oCount? true:false
}

// first try!!

function sumStr(a,b) {

      let aInt = Number.parseInt(a)
      let bInt = Number.parseInt(b)
      if (isNaN(aInt)){
        aInt = 0
      }
      if (isNaN(bInt)){
        bInt = 0
      }
      
      let sum = aInt + bInt
      //console.log(a)
      //console.log(b)
      //console.log(aInt)
      //console.log(bInt)
      //console.log(sum)
      return sum.toString()
}

//special thanks to deb_r for helping me through me this

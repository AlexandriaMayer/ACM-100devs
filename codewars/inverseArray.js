function invert(array) {
   let inverse = []
   for (i=0; i<array.length; i++){
     inverse.push(array[i] * -1)
   }
    return inverse
}

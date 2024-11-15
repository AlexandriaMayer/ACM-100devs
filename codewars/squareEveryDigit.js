function squareDigits(num){
  let numStr = num.toString().split('');
  let squared = [];
  for (i=0; i<numStr.length; i++){
    squared.push(numStr[i]*numStr[i])
  }
  return Number(squared.join(''));
}

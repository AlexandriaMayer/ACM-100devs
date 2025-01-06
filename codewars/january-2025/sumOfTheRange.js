function getSum(a, b)
{
  let arr = [];
   // step 1: create an array of number between a and b
  // ok, so it's not ordered. What I think I need to do is a sort
  if (a < b ){
    for (let i = a; i <= b; i++){
    arr.push(i);
  } }
  else{
    for (let i = b; i <= a; i++){
    arr.push(i);}
  }
  // step 2: reduce array
  return arr.reduce((c , d) => c + d , 0);
  // step 3: return array
}

// was able to solve this on my own <3

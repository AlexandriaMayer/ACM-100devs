function isTriangle(a,b,c)
{
   let arr = [a, b, c]
   arr.sort((f, l)=> f-l)
  return (arr[0] + arr[1])> arr[2] ? true:false
}

// found out about triangle inequality theorem for the first time since... college? I actually love geometry.

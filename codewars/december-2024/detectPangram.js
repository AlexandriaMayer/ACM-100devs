function isPangram(string){
  let strCC = string.toLowerCase().split("");
  let count = 0
  let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"]
  for (const letter of strCC)
    for (let i = 0; i < arr.length; i++){
      if (letter === arr[i]) arr[i] = '';  
    }
  arr = arr.filter(value => value !== '');
  return !arr.length ?true:false;
}

// okay I was like 66% of the way there before looking up the solution.
// time complexity is O^2, which is fine for a brute force solution.
// but I want to do more research and find out if I can get it down to O(n)

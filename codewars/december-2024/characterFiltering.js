function printerError(s) {
    console.log(s)
  // there's a brute force method, and a regex method.
  // brute force
  let count = 0;
  for (let i = 0; i < s.length; i++){
    if (s[i] === 'n' || s[i] === 'o' || s[i] === 'p' || s[i] === 'q' || s[i] === 'r'
       || s[i] === 's' || s[i] === 't' || s[i] === 'u' || s[i] === 'v' || s[i] === 'w'
       || s[i] === 'x' || s[i] === 'y' || s[i] === 'z')
      {count += 1};
    }
  return `${count}/${s.length}`;
}
// and a simpler way 
function printerError(s) {
    console.log(s)
  // there's a brute force method, and a regex method.
  // slightly more elegant
  let count = 0;
  for (let i = 0; i < s.length; i++){
    if (s[i] > "m")
      {count += 1};
    }
  return `${count}/${s.length}`;
}

const feast = (beast, dish) =>
  beast[0] == dish[0] && beast[beast.length-1] == dish[dish.length - 1]

// Had to look up the solution, but my initial approach was somewhat in the logical ballpark.
// Turns out I don't need For loops to get string index values 

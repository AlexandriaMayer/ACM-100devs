function evenOrOdd(number) {
  if (number % 2 == 0){
    return "Even"
  }
  else if (number % 2 ==! 0){
    return "Odd"
  }
  else{
    return "Odd"
    // this else seems to cover negative odd numbers not being retunred as odd under the first else if.
  }
}
evenOrOdd(4)

// okay this was easy

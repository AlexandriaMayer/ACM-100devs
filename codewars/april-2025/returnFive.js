function unusualFive() {
  let six = "F"
  let one = "A"
  let five = six.charCodeAt() % one.charCodeAt()
  return five
}

// https://www.codewars.com/kata/59441520102eaa25260000bf/
// this one was pretty tricky for an 8kyu, but I'm glad I was able to figure out 1) charCodeAt provides numbers 2) the falsy doesn't include %... so I needed to find a set of numbers that had a remainder of five
// of course, I think the top rated solution was even more clever ;)

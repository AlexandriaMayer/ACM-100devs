function twoSort(s) {
  let sorted = s.sort()
  let first = sorted[0].replaceAll(""," ").trim().replaceAll(" ","***")
  return first
}

// not hard. okay, so when wanting to select the first index, it would look like this:
// return s.sort()[0].replaceAll(""," ").trim().replaceAll(" ","***")
// sort function, then the index selection

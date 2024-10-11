function sortByLength (array) {
  array.sort((a, b)=> a.length - b.length || a.localeCompare(b))
  return array
}

// not hard tbh!

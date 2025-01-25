function alphabetPosition(text) {
  // step: iterate through the string (array), convert all alphabetics to lowercase.
  const regex = /[a-z]/gi
  // anki: regex cannot read arrays
  // anki you can use regex in replace
  // anki: string.match(regexPattern)
  // anki: charCodeAt can only read strings, not arrays
  return [...text.replace(/[^a-z]/gi, '').toLowerCase()].map(e => e.charCodeAt() - 96).join(" ")
  
}

// I almost got this one correct, but inclusive regex couldn't handle an edge case. I had to look up the solution, and turns out I can use regex (exclusive) in .replace, and then use charCodeAt with a .map.

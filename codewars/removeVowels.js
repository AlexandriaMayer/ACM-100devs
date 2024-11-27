// method one, the brute force method to deal with casing
function disemvowel(str) {
  return str
        .replaceAll('a', '')
        .replaceAll('A', '')
        .replaceAll('e', '')
        .replaceAll('E', '')
        .replaceAll('i', '')
        .replaceAll('I', '')
        .replaceAll('o', '')
        .replaceAll('O', '')
        .replaceAll('u', '')
        .replaceAll('U', '')
}
// most of the solutions involve some form of regex, for example https://www.codewars.com/kata/reviews/52fba700adcd10b182000980/groups/52fba700adcd10b18200097f

// a lot of these character matching problems involve regex, but Leon advised agaisnt regex at this stage in our learning, because it doesn't translate to technical interviews.


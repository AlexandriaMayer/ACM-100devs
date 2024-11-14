function countPositivesSumNegatives(input) {
  if (input === null) return [];
  if (input.filter(n => n != 0).length == 0) return [];
  const pos = input.filter((x) => x > 0);
  let numOfPos = pos.length
  const neg = input.filter((y) => y < 0).reduce((a,b)=> a + b, 0)
  return [numOfPos, neg]
}

// from https://javascript.info/arrow-functions-basics
// I was asked to replace a function expression with an arrow function

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}

console.log(ask(
  "Do you agree?",
  "You agreed.","You canceled the execution."))

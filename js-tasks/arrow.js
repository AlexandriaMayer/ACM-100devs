// from https://javascript.info/arrow-functions-basics
// I was asked to replace a function expression with an arrow function

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  => { alert("You agreed."); },
  => { alert("You canceled the execution."); }
);

const description = "basicCalculate library";

function modulate(x) {
  const even = 2;
  if (x % even == 0) {
    return "even";
  } else {
    return "odd";
  }
}

function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}
///////////////////////////////////////
function function0() {
  return "test function0";
}
function function1() {
  return "test function1";
}
function function2() {
  return "test function2";
}
///////////////////////////////////////
export default description;
export {
  modulate,
  add,
  multiply,
  subtract,
  divide,
  function0,
  function1,
  function2,
};

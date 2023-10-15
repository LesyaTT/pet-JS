let firstNum = 0;
let secondNum = 0;
let operand = "";
const nums = document.querySelectorAll(".nums");
const plus = document.getElementById("plus");
const input = document.getElementById("input");
const operands = document.querySelectorAll(".operand");
const result = document.getElementById("result");
const state = document.getElementById("valueState");

nums.forEach((item) => {
  item.addEventListener("click", function () {
    setInputValue(item);
  });
});

operands.forEach((o) => {
  o.addEventListener("click", function () {
    setOperand(o);
    setFirstNum(input.value);
    clearInput();
  });
});

document.getElementById("clear").addEventListener("click", clearInput);

function clearInput() {
  input.value = "";
}

function setFirstNum(num) {
  firstNum = num;
}

function setInputValue(item) {
  input.value += item.textContent;
}

function setOperand(o) {
  operand = o.textContent;
}

function changeState() {
  parseFloat(input.value) >= 0
    ? (input.value = "-" + input.value)
    : (input.value = Math.abs(input.value));
}

state.addEventListener("click", changeState);

result.addEventListener("click", function () {
  secondNum = input.value;
  input.value = calculate(parseFloat(firstNum), parseFloat(secondNum), operand);
});

function calculate(firstNum, secondNum, operand) {
  switch (operand) {
    case "+":
      return firstNum + secondNum;
      break;
    case "-":
      return firstNum - secondNum;
      break;
    case "x":
      return firstNum * secondNum;
      break;
    case "/":
      return firstNum / secondNum;
      break;
    case "%":
      return (firstNum / 100) * secondNum;
      break;
  }
}

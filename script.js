// selector
const previousOperandElement = document.querySelector(".previous_operand");
const currentOperandElement = document.querySelector(".current_operand");
const acButton = document.querySelector("#ac");
const delButton = document.querySelector("#del");
const equalButton = document.querySelector("#equal");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

let previousOperand = "";
let currentOperand = "";

function appendNumber(number) {
  currentOperand += number;
}

numberButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.innerText === "." && currentOperand.includes(".")) {
      return;
    }
    appendNumber(btn.innerText);
    updateDisplay();
  });
});

function updateDisplay() {
  currentOperandElement.innerText = currentOperand;
}

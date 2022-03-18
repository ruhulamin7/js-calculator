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
let operator = "";

function formatNumber(num) {
  const result = Number(num).toLocaleString("en");
  if (result !== "0") {
    return result;
  } else {
    return "";
  }
}
function updateDisplay() {
  currentOperandElement.innerHTML = formatNumber(currentOperand);
  previousOperandElement.innerHTML = `${formatNumber(
    previousOperand
  )}${operator}`;
}

function appendNumber(number) {
  currentOperand += number;
}

function choseOperator(op) {
  if (previousOperand) {
    previousOperand = calculation();
  } else {
    previousOperand = currentOperand;
  }
  operator = op;
  currentOperand = "";
}

function calculation() {
  switch (operator) {
    case "÷":
      return Number(previousOperand) / Number(currentOperand);
    case "*":
      return Number(previousOperand) * Number(currentOperand);
    case "+":
      return Number(previousOperand) + Number(currentOperand);
    case "-":
      return Number(previousOperand) - Number(currentOperand);
    case "%":
      return Number(previousOperand) % Number(currentOperand);
  }
}

// select numbers
numberButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.innerText === "." && currentOperand.includes(".")) return;
    appendNumber(btn.innerText);
    updateDisplay();
  });
});

// select operator buttons
operatorButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (!currentOperand) return;
    choseOperator(btn.innerText);
    updateDisplay();
  });
});

// equal calculation
equalButton.addEventListener("click", function () {
  if (!previousOperand) return;

  if (currentOperand) {
    currentOperand = calculation();
  } else {
    currentOperand = previousOperand;
  }
  previousOperand = "";
  operator = "";
  updateDisplay();
  currentOperand = "";
});

acButton.addEventListener("click", function () {
  previousOperand = "";
  currentOperand = "";
  operator = "";
  updateDisplay();
});

delButton.addEventListener("click", function () {
  currentOperand = currentOperand.slice(0, -1);
  updateDisplay();
});

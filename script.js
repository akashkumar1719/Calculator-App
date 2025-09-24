let display = document.getElementById("display");
let currentInput = "0";

function updateDisplay() {
  display.textContent = currentInput;
}

function appendNumber(num) {
  if (currentInput === "0") {
    currentInput = num;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function appendSymbol(symbol) {
  if (!isNaN(currentInput.slice(-1))) {
    currentInput += symbol;
    updateDisplay();
  }
}

function appendDecimal() {
  let parts = currentInput.split(/[\+\-\*\/%]/);
  if (!parts[parts.length - 1].includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function toggleSign() {
  if (!isNaN(currentInput)) {
    currentInput = String(parseFloat(currentInput) * -1);
    updateDisplay();
  }
}

function clearAll() {
  currentInput = "0";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1) || "0";
  updateDisplay();
}

function calculate() {
  try {
    currentInput = String(eval(currentInput));
  } catch {
    currentInput = "Error";
  }
  updateDisplay();
}

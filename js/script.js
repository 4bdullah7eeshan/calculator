function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, s) {
    if (s == "+") {
        return add(a, b);
    } else if (s == "-") {
        return subtract(a, b);
    } else if (s == "*") {
        return multiply(a, b);
    } else {
        return divide(a,b);
    }
}

let firstNumber, secondNumber, operator;

const calculator = document.querySelector("#calculator");

const display = document.createElement("button");
display.setAttribute("style", `height: ${100 / 6}%; width: 100%; outline: 1px solid black`);
display.textContent = "1234567890";
calculator.appendChild(display);

const clearButton = document.createElement("button");
clearButton.setAttribute("style", `height: ${100 / 6}%; width: 50%; outline: 1px solid black`);
clearButton.textContent = "A/C";
calculator.appendChild(clearButton);


const backspaceButton = document.createElement("button");
backspaceButton.setAttribute("style", `height: ${100 / 6}%; width: 50%; outline: 1px solid black`);
backspaceButton.textContent = "Backspace"
calculator.appendChild(backspaceButton);

const buttonTexts = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
];

for (let i = 0; i < 16; i++) {
    const btn = document.createElement("button");
    btn.setAttribute("style", `height: ${100 / 6}%; width: 25%; outline: 1px solid black;`); 
    btn.textContent = buttonTexts[i];
    btn.addEventListener("click", function() {
        hover(btn);
    });
    calculator.appendChild(btn);
}
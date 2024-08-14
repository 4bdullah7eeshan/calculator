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

function operate(a, s, b) {
    switch (s) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function handleButtonClick(box, device) {
    let choice;

    if (device == "keyboard") {
        choice = box;
    } else {
        choice = box.textContent;

    }
    // Check if the clicked button is a digit
    if (!isNaN(Number(choice))) {
        expression += choice;
        display.textContent = expression;
    // Check if the clicked button is an operator
    } else if (choice == "+" ||
        choice == "-" ||
        choice == "*" ||
        choice == "/") {
        if (expression === "" && firstNumber === undefined && operator === undefined) {
            firstNumber = 0;
            operator = choice;
        } else {
            // There are two cases. 1. The first number is not yet finalized
            if (firstNumber == undefined) {
                if (!isNaN(Number(expression))) {
                    firstNumber = Number(expression);
                    operator = choice;
                    expression = "";
                } else {
                    // do nothing
                }
            } else {
                if (!isNaN(Number(expression))) {
                    secondNumber = Number(expression);
                    display.textContent = operate(firstNumber, operator, secondNumber);
                    firstNumber = operate(firstNumber, operator, secondNumber);
                    secondNumber = undefined;
                    operator = choice;
                    expression = "";
                } else {

                }
                
            }
        }
    }

    else if (choice == ".") {
        if (expression.includes(".")) {
            // Do nothing
        } else {
            expression = expression.concat(choice);
            display.textContent = expression;
            
        }
        
    } else if (choice == "AC") {
        expression = "";
        firstNumber = undefined;
        secondNumber = undefined;
        display.textContent = 0;
    } else if (choice == "<-" || choice == "Backspace") {
        expression = expression.slice(0, -1);
        if (expression == "") {
            display.textContent = 0;
            firstNumber = undefined;
            secondNumber = undefined;
        } else {
            display.textContent = expression;
        }
    } else if (choice == "=" || choice == "Enter") {
        if (firstNumber != undefined &&
            operator != undefined &&
            expression != "") {
                secondNumber = Number(expression);
                display.textContent = operate(firstNumber, operator, secondNumber);
                expression = "";
                firstNumber = undefined;
                secondNumber = undefined;
                operator = undefined;
            }
    }

}


let firstNumber, secondNumber, operator, expression;
expression = "";

const calculatorContainer = document.querySelector("#calculator-container");

const calculator = document.createElement("div");
calculator.id = "calculator"

const header = document.createElement("h1");
header.id = "header"
header.textContent = "CALCULATOR";
calculatorContainer.appendChild(header);

const display = document.createElement("button");
display.id = "display";
display.setAttribute("style", `height: ${100 / 6}%; width: 100%; outline: 1px solid black`);
display.addEventListener("keydown", (event) => {
    handleButtonClick(event.key, "keyboard");
});
display.textContent = 0;
calculator.appendChild(display);

const clearButton = document.createElement("button");
clearButton.id = "clear-button";
clearButton.setAttribute("style", `height: ${100 / 6}%; width: 50%; outline: 1px solid black`);
clearButton.textContent = "AC";
clearButton.addEventListener("click", function() {
    handleButtonClick(clearButton, "mouse");
});
calculator.appendChild(clearButton);


const backspaceButton = document.createElement("button");
backspaceButton.id = "backspace-button";
backspaceButton.setAttribute("style", `height: ${100 / 6}%; width: 50%; outline: 1px solid black`);
backspaceButton.textContent = "<-";
backspaceButton.addEventListener("click", function() {
    handleButtonClick(backspaceButton, "mouse");
});
calculator.appendChild(backspaceButton);

const buttonTexts = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
];

for (let i = 0; i < 16; i++) {
    const btn = document.createElement("button");
    if (i == 3 || i == 7 || i == 11 || i == 15) {
        btn.setAttribute("class", "operator")
    }
    else if (i == 14) {
        btn.setAttribute("class", "equals");
    } else {
        btn.setAttribute("class", "digits");
    }
    btn.setAttribute("style", `height: ${100 / 6}%; width: 25%; outline: 1px solid black;`); 
    btn.textContent = buttonTexts[i];
    btn.addEventListener("click", function() {
        handleButtonClick(btn, "mouse");
    });
    calculator.appendChild(btn);
}

calculatorContainer.appendChild(calculator);

const footer = document.createElement("div");
footer.id = "footer";

const footerText = document.createElement("div");
footerText.textContent = "Copyright © Abdullah Zeeshan 2024";
footer.appendChild(footerText);

const footerLink = document.createElement("a");
footerLink.href = "https://github.com/4bdullah7eeshan/calculator";
footerLink.target = "_blank";
footerLink.rel = "noopener noreferer";
const githubLogo = document.createElement("i");
githubLogo.className = "fab fa-github";
footerLink.appendChild(githubLogo);
footer.appendChild(footerLink);

calculatorContainer.appendChild(footer);
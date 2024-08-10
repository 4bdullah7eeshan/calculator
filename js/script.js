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


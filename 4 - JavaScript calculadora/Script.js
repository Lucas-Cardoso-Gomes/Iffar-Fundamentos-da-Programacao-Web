let currentOperation = null;
let currentNumber = '';
let previousNumber = '';

function appendNumber(number) {
    if (currentNumber.length <= 10) {
        currentNumber += number;
        updateDisplay();
    }
}

function setOperation(operator) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    currentOperation = operator;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let calculation;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            calculation = prev + current;
            break;
        case '-':
            calculation = prev - current;
            break;
        case '*':
            calculation = prev * current;
            break;
        case '/':
            calculation = prev / current;
            break;
        default:
            return;
    }
    currentNumber = calculation.toString();
    currentOperation = null;
    previousNumber = '';
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}

updateDisplay();
// const dispValue = document.getElementById('display').value;

function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = ' ';
}

function getResult() {
    const expression = document.getElementById('display').value;
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function squareRoot() {
    const dispValue = document.getElementById('display').value;
    if (dispValue !== '') {
        const number = parseFloat(dispValue);
        if (number >= 0) {
            const result = Math.sqrt(number);
            document.getElementById('display').value = result;
            dispValue = result;
        } else {
            document.getElementById('display').value = 'Error';
        }
    }
}

function deleteLast() {
    const dispValue = document.getElementById('display').value;
    document.getElementById('display').value = dispValue.slice(0, -1);
}

function changeSign() {
    const dispValue = document.getElementById('display').value;
    if (dispValue.charAt(0) === '-') {
        document.getElementById('display').value = dispValue.slice(1).toFixed(3);
    } else {
        document.getElementById('display').value = '-' + dispValue;
    }
}

function calculate() {
    let num1 = parseFloat(document.getElementById('numb1').value);
    let num2 = parseFloat(document.getElementById('numb2').value);
    let operator = document.getElementById('operator').value;

    let result;

    if (document.getElementById('numb1').value === '' || document.getElementById('numb2').value === '') {
        result = 'Please enter valid numbers';
    } else {
        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            if (num2 === 0) {
                result = 'Cannot divide by zero';
            } else {
                result = num1 / num2;
            }
        } else {
            result = 'Invalid operator';
        }
    }

    document.getElementById('result').textContent = 'Result: ' + result;
}

function clearFields() {
    document.getElementById('numb1').value = '';
    document.getElementById('numb2').value = '';
    document.getElementById('operator').value = '+'; 
    document.getElementById('result').textContent = 'Result: ';
}

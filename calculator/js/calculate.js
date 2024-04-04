document.getElementById('btn-calculate').addEventListener('click', function () {
    const fristInput = document.getElementById('first-input').value;
    const fristNumber = parseFloat(fristInput);

    const secondInput = document.getElementById('second-input').value;
    const secondNumber = parseFloat(secondInput);

    const operator = document.getElementById('operator-field').value;

    if (isNaN(fristNumber)) {
        alert('Please input valid number');
        return;
    }else if (isNaN(secondNumber)) {
        alert('Please input valid number');
        return;
    }

    const resultField = document.getElementById('result')

    if(operator === '+' ) {
        const addition = parseFloat(fristNumber + secondNumber);
        resultField.innerText = addition.toFixed(2);
    }else if( operator === '-') {
        const subtraction = parseFloat(fristNumber - secondNumber);
        resultField.innerText = subtraction.toFixed(2);
    }else if( operator === '*') {
        const multiplication =  parseFloat(fristNumber * secondNumber);
        resultField.innerText = multiplication.toFixed(2);
    }else if( operator === '/') {
        const division = parseFloat(fristNumber / secondNumber);
        resultField.innerText = division.toFixed(2);
    }


})
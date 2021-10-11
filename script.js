let inputs = document.getElementsByTagName('input');
let nameForm = document.getElementById('name');
let carYear = document.getElementById('car-year');
let numOfDays = document.getElementById('days');
let cvv = document.getElementById('cvv');
let makeResButton = document.getElementById('submit-button');
let total = document.getElementById('total');
let invalidElements = document.querySelectorAll('.invalid');
let makeForm = document.getElementById('car-make');
let modelForm = document.getElementById('car-model');
let creditCard = document.getElementById('credit-card');

let form = document.getElementById('parking-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateName(nameForm);
    validateCarYear(carYear);
    validateMake(makeForm);
    validateModel(modelForm);
    validateNumOfDays(numOfDays);
    validateCC(creditCard);
    validateCVV(cvv);
});

function validateName(input) {
    let errorName = document.createElement('p');
    errorName.id = 'error-Name';

    if (input.value !== '') {
        console.log('test passed!');
        input.classList.remove('invalid');
        input.classList.add('valid');
        document.getElementById('error-Name').remove();
    } else {
        if (document.getElementById('error-Name')) {
            document.getElementById('error-Name').remove();
        }

        errorName.innerText = 'This is a required field';
        document.getElementById('name-field').appendChild(errorName);
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

function validateCarYear(input) {
    let errorCY = document.createElement('p');
    errorCY.id = 'error-CY';

    if (input.value >= 1900 && input.value <= 2022) {
        console.log('test passed!');
        input.classList.remove('invalid');
        input.classList.add('valid');
        document.getElementById('error-CY').remove();
    } else {
        if (document.getElementById('error-CY')) {
            document.getElementById('error-CY').remove();
        }

        errorCY.innerText = 'Must enter a year between 1900 and 2022';
        document.getElementById('car-field').appendChild(errorCY);
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

function validateMake(input) {
    let errorMake = document.createElement('p');
    errorMake.id = 'error-Make';

    if (input.value !== '') {
        console.log('test passed!');
        input.classList.remove('invalid');
        input.classList.add('valid');
        document.getElementById('error-Make').remove();
    } else {
        if (document.getElementById('error-Make')) {
            document.getElementById('error-Make').remove();
        }

        errorMake.innerText = '"Make" is a required field';
        document.getElementById('car-field').appendChild(errorMake);
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

function validateModel(input) {
    let errorModel = document.createElement('p');
    errorModel.id = 'error-Model';

    if (input.value !== '') {
        console.log('test passed!');
        input.classList.remove('invalid');
        input.classList.add('valid');
        document.getElementById('error-Model').remove();
    } else {
        if (document.getElementById('error-Model')) {
            document.getElementById('error-Model').remove();
        }

        errorModel.innerText = '"Model" is a required field';
        document.getElementById('car-field').appendChild(errorModel);
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

function validateParkingDate(input) {
    let errorPDate = document.createElement('p');
    errorPDate.id = 'error-PDate';

    if (input.value !== '') {
        console.log('test passed!');
        input.classList.remove('invalid');
        input.classList.add('valid');
        document.getElementById('error-Model').remove();
    } else {
        if (document.getElementById('error-PDate')) {
            document.getElementById('error-PDate').remove();
        }

        errorPDate.innerText = "Must enter a date after today's date";
        document.getElementById('car-field').appendChild(errorPDate);
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

function validateNumOfDays(input) {
    let errorND = document.createElement('p');
    errorND.id = 'error-ND';

    if (input.value >= 1 && input.value <= 30) {
        console.log('test passed!');
        input.classList.remove('invalid');
        input.classList.add('valid');
        document.getElementById('error-ND').remove();
    } else {
        if (document.getElementById('error-ND')) {
            document.getElementById('error-ND').remove();
        }

        errorND.innerText = 'Must enter a number between 1 and 30';
        document.getElementById('days-field').appendChild(errorND);
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

function validateCC(input) {
    let errCC = document.createElement('p');
    errorCC.id = 'error-CC';

    if (input.value !== '') {
        console.log('test passed!');
        input.classList.remove('invalid');
        input.classList.add('valid');
        document.getElementById('error-CC').remove();
    } else {
        if (document.getElementById('error-CC')) {
            document.getElementById('error-CC').remove();
        }

        errorCC.innerText = 'This is a required field';
        document.getElementById('car-field').appendChild(errorCC);
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

function validateCVV(input) {
    let errorCVV = document.createElement('p');
    errorCVV.id = 'error-CVV';

    let regEx = /^\d{3}$/;

    if (regEx.test(input.value)) {
        console.log('test passed!');
        input.classList.remove('invalid');
        input.classList.add('valid');
        document.getElementById('error-CVV').remove();
    } else {
        if (document.getElementById('error-CVV')) {
            document.getElementById('error-CVV').remove();
        }

        errorCVV.innerText = 'Must enter a three-digit number';
        document.getElementById('cvv-field').appendChild(errorCVV);
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

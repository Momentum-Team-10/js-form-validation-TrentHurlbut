console.log('Add validation!');

let inputs = document.getElementsByTagName('input');
let carYear = document.getElementById('car-year');
let numOfDays = document.getElementById('days');
let cvv = document.getElementById('cvv');
let makeResButton = document.getElementById('submit-button');
let total = document.getElementById('total');
let invalidElements = document.querySelectorAll('.invalid');

window.addEventListener('load', () => {
    for (let input of inputs) {
        input.setAttribute('required', '');
    }

    carYear.setAttribute('type', 'number');

    numOfDays.setAttribute('type', 'number');

    cvv.setAttribute('type', 'number');
});

cvv.addEventListener('submit', () => {
    if (cvv.innerText.length !== 3) {
        cvv.classList.add('invalid');
    }
});

carYear.addEventListener('submit', () => {
    if (carYear.value < 1900 || carYear.value > 2022) {
        carYear.classList.add('invalid');
    }
});

numOfDays.addEventListener('submit', () => {
    if (numOfDays.value < 1 || numOfDays.value > 30) {
        numOfDays.classList.add('invalid');
    }
});

makeResButton.addEventListener('click', () => {
    if (invalidElements === []) {
        total.innerText = '$' + 5 * numOfDays.input;
    } else {
        for (let invalidElement of invalidElements) {
            invalidElement.setAttribute(
                'oninvalid',
                'You must provide valid input!'
            );
        }
    }
});

import { operation, toNumber } from './calculator.js';

const firstInput = document.getElementById('first-input');
const secondInput = document.getElementById('second-input');
const answer = document.getElementById('equals');
const answers = document.getElementById('result');
const action = document.getElementById('sign');
answer.addEventListener('click', () => {
    answers.textContent = operation(toNumber(firstInput), action.value, toNumber(secondInput));
});
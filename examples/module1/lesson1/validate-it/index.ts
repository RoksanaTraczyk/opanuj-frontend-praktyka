import { NUMBER_VALIDATORS } from "./validation/validationConditions";
import { validate } from "./validation/validator";

function main() {
    const input: HTMLInputElement = document.querySelector('input')!;
    const validateButton: HTMLElement = document.querySelector('#validation-btn')!;
    const clearInputButton: HTMLElement = document.querySelector('#cleanup-btn')!;
    const result: HTMLElement = document.querySelector('#result')!;

    validateButton.addEventListener('click', () => {
        result.innerHTML = validate(input.value, NUMBER_VALIDATORS);
    });

    clearInputButton.addEventListener('click', () => {
        input.value = '';
        result.innerHTML = '';
    });
}

main();


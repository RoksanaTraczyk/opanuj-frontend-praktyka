import { ValidateConditions, checkIsNumber, isGreaterThen, isLessThen } from "./validationConditions";

const VALID_MESSAGE = 'Valid';
const INVALID_MESSAGE = 'Invalid';
const input = document.getElementById('input') as HTMLInputElement;
const validateButton = document.getElementById('validate-button');
const clearButton = document.getElementById('clear-button');
const result = document.getElementById('result');

export function validator(conditions: ValidateConditions) {
    if(result === null || input === null){
        return;
    }
    
    validateButton?.addEventListener('click', () => {
        result.innerHTML = conditions.every(condition => condition(input.value)) ? VALID_MESSAGE : INVALID_MESSAGE; 
    });

    clearButton?.addEventListener('click', () => {
        input.value = '';
        result.innerHTML = '';
    });
}


validator([checkIsNumber, isLessThen, isGreaterThen]);



import { isValidInteger, type NumericValidationMethod } from "./validationConditions";

const MESSAGE_ERROR_INVALID_INPUT = 'Invalid - empty or non integer';
const MESSAGE_ERROR_INVALID_INT = 'Invalid number';
const MESSAGE_SUCCESS_VALID_INT = 'Valid';


export function validate(input: string, validators: NumericValidationMethod[]): string {
  if (!isValidInteger(input)) {
    return MESSAGE_ERROR_INVALID_INPUT;
  }

  const isValidRangeInteger = validators.every((validateFn) =>
    validateFn(Number(input))
  );

  return isValidRangeInteger ? MESSAGE_SUCCESS_VALID_INT : MESSAGE_ERROR_INVALID_INT;

}


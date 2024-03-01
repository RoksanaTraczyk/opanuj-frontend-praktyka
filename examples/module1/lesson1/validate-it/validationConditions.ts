export type ValidateConditions = { (value: InputValue): boolean }[];
export type InputValue = string | number;

export const checkIsNumber = (value: InputValue) => {
    return Number.isInteger(Number(value));
}

export const isLessThen = (value: InputValue, maxValue: number = 100) => {
    return Number(value) < maxValue
}

export const isGreaterThen = (value: InputValue, minValue: number = 0) => {
    return Number(value) > minValue
}
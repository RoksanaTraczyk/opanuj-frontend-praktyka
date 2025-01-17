export type NumericValidationMethod = (input: number) => boolean;
export type StringValidationMethod = (input: string) => boolean;

const isEven: NumericValidationMethod = (input: number) => input % 2 === 0;

export const isLessThen = (maxValue: number) : NumericValidationMethod => {
    return (input: number) => input < maxValue;
}

export const isGreaterThen = (minValue: number) : NumericValidationMethod => {
    return (input: number) => input > minValue;
}

export const NUMBER_VALIDATORS: NumericValidationMethod[] = [
    isEven,
    isGreaterThen(0),
    isLessThen(100),
];

export const isValidInteger: StringValidationMethod = (input: string) : boolean =>  {
    return input !== '' && Number.isInteger(Number(input)) 
}
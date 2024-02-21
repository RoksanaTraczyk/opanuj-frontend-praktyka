import React, { useState } from 'react';
import InputComponent from './component/InputComponent';
import ButtonComponent from './component/ButtonComponent';
import { add, divide, multiply, subtract } from './functions';

const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const calculate = (func: (a: number, b: number) => number) => {
    setResult(func(firstNumber, secondNumber));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <InputComponent value={firstNumber} onChange={(e: any) => setFirstNumber(parseFloat(e.target.value))}/>
        <InputComponent value={secondNumber} onChange={(e: any) => setSecondNumber(parseFloat(e.target.value))}/>
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <ButtonComponent buttonName="+" onClick={() => calculate(add)}/>
        <ButtonComponent buttonName="-" onClick={() => calculate(subtract)}/>
        <ButtonComponent buttonName="*" onClick={() => calculate(multiply)}/>
        <ButtonComponent buttonName="/" onClick={() => calculate(divide)}/>
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;

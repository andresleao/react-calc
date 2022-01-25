import { useState, useEffect } from 'react';

export default function useCalc() {
  const [firstNumber, setFirstNumber] = useState({ value: '0' });
  const [operator, setOperator] = useState({ value: '' });
  const [lastNumber, setLastNumber] = useState({ value: '0' });
  const [result, setResult] = useState({ value: '0' });

  const handleNumericInput = (e) => {
    const number = e.target.innerHTML;

    if (result.value !== '0' && firstNumber.value === '0') {
      setResult({ value: '0' });
    }

    if (operator.value === '') {
      setFirstNumber((prevState) => ({
        ...prevState,
        value:
          prevState.value === '0' && result.value === '0'
            ? number
            : prevState.value + number,
      }));
      setResult((prevState) => ({
        ...prevState,
        value: prevState.value === '0' ? number : prevState.value + number,
      }));
    } else {
      setLastNumber((prevState) => ({
        ...prevState,
        value: prevState.value === '0' ? number : prevState.value + number,
      }));
      setResult((prevState) => ({
        ...prevState,
        value: prevState.value + number,
      }));
    }
  };

  const handleOperationInput = (e) => {
    const operation = e.target.innerHTML;

    if (result.value !== '0' && firstNumber.value === '0') {
      setResult({ value: '0' });
    }

    if (firstNumber.value !== '0') {
      setOperator({ value: operation });

      setResult((prevState) => ({
        ...prevState,
        value:
          lastNumber.value === '0'
            ? prevState.value + ' ' + operation + ' '
            : prevState.value,
      }));
    }
  };

  const handleResultInput = () => {
    let operation = operator.value;
    let calcResult = 0;

    switch (operation) {
      case '/':
        calcResult = Number(firstNumber.value) / Number(lastNumber.value);
        break;
      case 'x':
        calcResult = Number(firstNumber.value) * Number(lastNumber.value);
        break;
      case '+':
        calcResult = Number(firstNumber.value) + Number(lastNumber.value);
        break;
      case '-':
        calcResult = Number(firstNumber.value) - Number(lastNumber.value);
        break;
      default:
        break;
    }
    setResult({ value: calcResult });
    setFirstNumber({ value: '0' });
    setLastNumber({ value: '0' });
    setOperator({ value: '' });
  };

  const handleReset = () => {
    setFirstNumber({ value: '0' });
    setOperator({ value: '' });
    setLastNumber({ value: '0' });
    setResult({ value: '0' });
  };

  return {
    handleNumericInput,
    handleOperationInput,
    handleResultInput,
    handleReset,
    firstNumber,
    operator,
    lastNumber,
    result,
  };
}

import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setOutput(eval(input).toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+', 'C'].map((value, index) => (
          <button key={index} onClick={() => {
            if (value === 'C') {
              handleClear();
            } else if (value === '=') {
              handleCalculate();
            } else {
              handleButtonClick(value);
            }
          }}>
            {value}
          </button>
        ))}
      </div>
      <div className="output">{output}</div>
    </div>
  );
};

export default Calculator;

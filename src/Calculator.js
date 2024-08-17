// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // We'll add styles later

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    < div className='welcome'>

    <h1 className='A'>Web Calculator</h1>
    
        

    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
    </div>

    
  );
};

export default Calculator;

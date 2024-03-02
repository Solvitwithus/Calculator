import React, { useState } from 'react';
import './display.css';

function Display() {
  const [displayValue, setDisplayValue] = useState('');

  const appendToDisplay = (input) => {
    setDisplayValue((prevValue) => prevValue + input);
  };

  const clearDisplay = () => {
    setDisplayValue('`');
  };

  const calculate = () => {
    try {
      setDisplayValue(eval(displayValue));
    } catch {
      setDisplayValue('Error');
    }
  };

  return (
    <div id='calculator'>
      <input readOnly id='display' value={displayValue} />
      <div id='keys'>
        <button onClick={() => appendToDisplay('+')} className='operatorbtn'>+</button>
        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('-')} className='operatorbtn'>-</button>
        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('*')} className='operatorbtn'>*</button>
        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('/')} className='operatorbtn'>/</button>
        <button onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={() => appendToDisplay('.')}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={clearDisplay} className='operatorbtn'>C</button>
      </div>
    </div>
  );
}

export default Display;
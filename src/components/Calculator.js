import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleCalculation = (e) => {
    const buttonName = e.target.name;

    return setCalcData((obj) => calculate(obj, buttonName));
  };

  const { total, next, operation } = calcData;
  const output = `${total}${operation}${next}`.replace(/null/g, '').replace(/undefined/g, '');

  return (
    <>
      <div className="calculator">

        <input
          type="text"
          className="calculator-screen"
          id="calc-screen"
          value={output === '' ? '0' : output}
          disabled
        />

        <div className="calculator-keys">

          <button type="button" className="all-clear" name="AC" onClick={handleCalculation}>AC</button>
          <button type="button" className="Plus-minus" name="+/-" onClick={handleCalculation}>+/-</button>
          <button type="button" className="oprator" name="%" onClick={handleCalculation}>%</button>
          <button type="button" className="operator" name="+" onClick={handleCalculation}>+</button>

          <button type="button" className="number" name="7" onClick={handleCalculation}>7</button>
          <button type="button" className="number" name="8" onClick={handleCalculation}>8</button>
          <button type="button" className="number" name="9" onClick={handleCalculation}>9</button>
          <button type="button" className="operator" name="x" onClick={handleCalculation}>&times;</button>

          <button type="button" className="number" name="4" onClick={handleCalculation}>4</button>
          <button type="button" className="number" name="5" onClick={handleCalculation}>5</button>
          <button type="button" className="number" name="6" onClick={handleCalculation}>6</button>
          <button type="button" className="operator" name="-" onClick={handleCalculation}>-</button>

          <button type="button" className="number" name="1" onClick={handleCalculation}>1</button>
          <button type="button" className="number" name="2" onClick={handleCalculation}>2</button>
          <button type="button" className="number" name="3" onClick={handleCalculation}>3</button>
          <button type="button" className="operator" name="÷" onClick={handleCalculation}>&divide;</button>

          <button type="button" className="number zero" name="0" onClick={handleCalculation}>0</button>
          <button type="button" className="number" name="." onClick={handleCalculation}>.</button>
          <button type="button" className="operator" name="=" onClick={handleCalculation}>=</button>

        </div>

      </div>
    </>
  );
};

export default Calculator;

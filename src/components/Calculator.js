import React from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <>
        <div className="calculator">

          <input type="text" className="calculator-screen" id="calc-screen" value="0" disabled />

          <div className="calculator-keys">

            <button type="button" className="all-clear">AC</button>
            <button type="button" className="Plus-minus">+/-</button>
            <button type="button" className="percentage">%</button>
            <button type="button" className="operator">+</button>

            <button type="button" className="number">7</button>
            <button type="button" className="number">8</button>
            <button type="button" className="number">9</button>
            <button type="button" className="operator">&times;</button>

            <button type="button" className="number">4</button>
            <button type="button" className="number">5</button>
            <button type="button" className="number">6</button>
            <button type="button" className="operator">-</button>

            <button type="button" className="number">1</button>
            <button type="button" className="number">2</button>
            <button type="button" className="number">3</button>
            <button type="button" className="operator">&divide;</button>

            <button type="button" className="number">0</button>
            <button type="button" className="number">.</button>
            <button type="button" className="equal-sign">=</button>

          </div>

        </div>
      </>
    );
  }
}

export default Calculator;

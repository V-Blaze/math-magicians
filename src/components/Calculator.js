import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleCalculation = (e) => {
    const buttonName = e.target.name;

    return this.setState((obj) => calculate(obj, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    const output = `${total}${operation}${next}`.replace(/null/g, '');
    const trimedOutput = output.replace(/undefined/g, '');

    return (
      <>
        <div className="calculator">

          <input
            type="text"
            className="calculator-screen"
            id="calc-screen"
            value={trimedOutput === '' ? '0' : trimedOutput}
            disabled
          />

          <div className="calculator-keys">

            <button type="button" className="all-clear" name="AC" onClick={this.handleCalculation}>AC</button>
            <button type="button" className="Plus-minus" name="+/-" onClick={this.handleCalculation}>+/-</button>
            <button type="button" className="percentage oprator" name="%" onClick={this.handleCalculation}>%</button>
            <button type="button" className="operator" name="+" onClick={this.handleCalculation}>+</button>

            <button type="button" className="number" name="7" onClick={this.handleCalculation}>7</button>
            <button type="button" className="number" name="8" onClick={this.handleCalculation}>8</button>
            <button type="button" className="number" name="9" onClick={this.handleCalculation}>9</button>
            <button type="button" className="operator" name="x" onClick={this.handleCalculation}>&times;</button>

            <button type="button" className="number" name="4" onClick={this.handleCalculation}>4</button>
            <button type="button" className="number" name="5" onClick={this.handleCalculation}>5</button>
            <button type="button" className="number" name="6" onClick={this.handleCalculation}>6</button>
            <button type="button" className="operator" name="-" onClick={this.handleCalculation}>-</button>

            <button type="button" className="number" name="1" onClick={this.handleCalculation}>1</button>
            <button type="button" className="number" name="2" onClick={this.handleCalculation}>2</button>
            <button type="button" className="number" name="3" onClick={this.handleCalculation}>3</button>
            <button type="button" className="operator" name="÷" onClick={this.handleCalculation}>&divide;</button>

            <button type="button" className="number zero" name="0" onClick={this.handleCalculation}>0</button>
            <button type="button" className="number" name="." onClick={this.handleCalculation}>.</button>
            <button type="button" className="equal-sign operator" name="=" onClick={this.handleCalculation}>=</button>

          </div>

        </div>
      </>
    );
  }
}

export default Calculator;

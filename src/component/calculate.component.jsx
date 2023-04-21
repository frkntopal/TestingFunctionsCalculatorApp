import React, { useState } from "react";

import "./calculate.style.scss";



export const handleDigitClick = (digit, displayValue, setDisplayValue) => {
  setDisplayValue(displayValue === "0" ? String(digit) : displayValue + digit);
};

export const handleDecimalClick = (displayValue, setDisplayValue) => {
  if (!displayValue.includes(".")) {
    setDisplayValue(displayValue + ".");
  }
};

export const handleOperatorClick = (
  selectedOperator,
  firstOperand,
  setFirstOperand,
  displayValue,
  setDisplayValue,
  setOperator,
  performCalculation
) => {
  if (firstOperand === null) {
    setFirstOperand(displayValue);
    setOperator(selectedOperator);
    setDisplayValue("0");
  } else {
    const result = performCalculation();
    setFirstOperand(result);
    setOperator(selectedOperator);
    setDisplayValue("0");
  }
};

export const handleEqualsClick = (
  setFirstOperand,
  setOperator,
  setDisplayValue,
  performCalculation
) => {
  const result = performCalculation();
  setFirstOperand(result);
  setOperator(null);
  setDisplayValue(result);
};

export const handleClearClick = (
  setDisplayValue,
  setFirstOperand,
  setOperator
) => {
  setDisplayValue("0");
  setFirstOperand(null);
  setOperator(null);
};

export const performCalculation = (
  firstOperand,
  displayValue,
  operator
) => {
  const floatFirstOperand = parseFloat(firstOperand);
  const floatDisplayValue = parseFloat(displayValue);

  if (operator === "+") {
    return String(floatFirstOperand + floatDisplayValue);
  } else if (operator === "-") {
    return String(floatFirstOperand - floatDisplayValue);
  } else if (operator === "*") {
    return String(floatFirstOperand * floatDisplayValue);
  } else if (operator === "/") {
    return String(floatFirstOperand / floatDisplayValue);
  }

  return displayValue;
};

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);

return (
  <div className="calculator">
    <div className="display">{displayValue}</div>
    <div className="keypad">
      <div className="row">
        <button onClick={() => handleClearClick(setDisplayValue, setFirstOperand, setOperator)}>C</button>
        <button onClick={() => handleOperatorClick("/", firstOperand, setFirstOperand, displayValue, setDisplayValue, operator, setOperator, () => performCalculation(firstOperand, displayValue, operator))}>/</button>
        <button onClick={() => handleOperatorClick("*", firstOperand, setFirstOperand, displayValue, setDisplayValue, operator, setOperator, () => performCalculation(firstOperand, displayValue, operator))}>*</button>
        <button onClick={() => handleOperatorClick("-", firstOperand, setFirstOperand, displayValue, setDisplayValue, operator, setOperator, () => performCalculation(firstOperand, displayValue, operator))}>-</button>
      </div>
      <div className="row">
        <button onClick={() => handleDigitClick(7, displayValue, setDisplayValue)}>7</button>
        <button onClick={() => handleDigitClick(8, displayValue, setDisplayValue)}>8</button>
        <button onClick={() => handleDigitClick(9, displayValue, setDisplayValue)}>9</button>
        <button onClick={() => handleOperatorClick("+", firstOperand, setFirstOperand, displayValue, setDisplayValue, operator, setOperator, () => performCalculation(firstOperand, displayValue, operator))}>+</button>
      </div>
      <div className="row">
        <button onClick={() => handleDigitClick(4, displayValue, setDisplayValue)}>4</button>
        <button onClick={() => handleDigitClick(5, displayValue, setDisplayValue)}>5</button>
        <button onClick={() => handleDigitClick(6, displayValue, setDisplayValue)}>6</button>
        <button onClick={() => handleEqualsClick(firstOperand, setFirstOperand, operator, setOperator, displayValue, setDisplayValue, () => performCalculation(firstOperand, displayValue, operator))}>=</button>
      </div>
      <div className="row">
        <button onClick={() => handleDigitClick(1, displayValue, setDisplayValue)}>1</button>
        <button onClick={() => handleDigitClick(2, displayValue, setDisplayValue)}>2</button>
        <button onClick={() => handleDigitClick(3, displayValue, setDisplayValue)}>3</button>
        <button onClick={() => handleDecimalClick(displayValue, setDisplayValue)}>.</button>
      </div>
      <div className="row">
        <button onClick={() => handleDigitClick(0, displayValue, setDisplayValue)}>0</button>
      </div>
    </div>
  </div>
);
};

export default Calculator;

// @flow
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-mdl';
import React from 'react';
import Key from './key';

function Keypad(props: Object) {
  const numbers = [0,1,2,3,4,5,6,7,8,9];
  const operators = ["+", "-", "*", "/", "."];
  const clear = ["CLEAR", "UNDO"];
  let numberKeySet = numbers.map((number) => {
    return (
      <Key
          key={number.toString(10)}
          value={number.toString(10)}
          handleClick={props.handleButtonClick}/>);
  });
  let operatorKeySet = operators.map((operator) => {
    return (
      <Key key={operator}
          value={operator}
          handleClick={props.handleButtonClick}/>);
  });
  let clearKeySet = clear.map((clearKey) => {
    return (
      <Key key={clearKey}
          value={clearKey}
          handleClick={props.handleClearClick}/>);
  });
  return (
    <div style={{width: '300px', margin: 'auto'}}>
      <h1>Keypad</h1>
      <br />
      {numberKeySet}
      <br />
      {operatorKeySet}
      <br />
      {clearKeySet}
      <Button raised accent ripple onClick={props.calculate}>{'\uFF1D'}</Button>
    </div>
  );
}

export default Keypad;

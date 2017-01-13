// @flow
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-mdl';
import React from 'react';
import Key from './key';

function Keypad(props: Object) {
  const numbers = ['1','2','3','4','5','6','7','8','9','0','.'];
  const operators = ["+", "-", "*", "/"];
  const clear = ["CLEAR", "UNDO"];
  let numberKeySet = numbers.map((number) => {
    return (
      <Key
          style={{margin: '2px', fontWeight: '900'}}
          key={number}
          value={number}
          handleClick={props.handleButtonClick} />);
  });
  let operatorKeySet = operators.map((operator) => {
    return (
      <Key
          accent="accent"
          style={{margin: '2px', fontWeight: '900'}}
          key={operator}
          value={operator}
          handleClick={props.handleButtonClick} />);
  });
  let clearKeySet = clear.map((clearKey) => {
    return (
      <Key
          style={{width: '75px', margin: '15px', fontWeight: '700'}}
          key={clearKey}
          value={clearKey}
          handleClick={props.handleClearClick} />);
  });
  return (
    <div>
      {numberKeySet}
      <br />
      {operatorKeySet}
      <br />
      <Button raised accent ripple style={{margin: '1px', width: '268px', fontWeight: '900'}} onClick={props.calculate}>{'\uFF1D'}</Button>
      <br />
      {clearKeySet}

    </div>
  );
}

export default Keypad;

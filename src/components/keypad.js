// @flow
import React from 'react';
import Key from './key';

function Keypad(props: Object) {
  const numbers = [1,2,3,4,5,6,7,8,9];
  let numberKeySet = numbers.map((number) => {
    return (
      <Key key={number.toString(10)}
          number={number.toString(10)}
          handleButtonClick={props.handleButtonClick}/>);
  });
  return (
    <div>
      <h1>Keypad</h1>
      <span>{props.expression} </span>
      <button onClick={props.calculate}>=</button>
      <br />
      {numberKeySet}
    </div>
  );
}

export default Keypad;

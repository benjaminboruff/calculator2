// @flow
import { ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import React from 'react';
import Key from './key';

function Keypad(props: Object) {
  const row1 = ['1','2','3','+'];
  const row2 = ['4','5','6','-'];
  const row3 = ['7','8','9','*'];
  const row4 = ['0','.',' ','/'];

  const numbers = ['1','2','3','4','5','6','7','8','9','0','.'];
  const operators = ["+", "-", "*", "/"];
  const clear = ["CLEAR", "UNDO"];

  let numberKeySet = numbers.map((number) => {
    return (
      <Key
          type="number"
          key={number}
          value={number}
          handleClick={props.handleButtonClick} />);
  });

  let operatorKeySet = operators.map((operator) => {
    return (
      <Key
          type="operator"
          key={operator}
          value={operator}
          handleClick={props.handleButtonClick} />);
  });

  let clearKeySet = clear.map((clearKey) => {
    return (
      <Key
          key={clearKey}
          value={clearKey}
          handleClick={props.handleClearClick} />);
  });

  let equalKey = <Key value="=" handleClick={props.calculate}></Key>;

  return (
    <div>
      <ButtonToolbar style={{margin: 'auto'}}>
        <ButtonGroup>
          {numberKeySet}
        </ButtonGroup>
      </ButtonToolbar>
      <br />
      <ButtonToolbar style={{margin: 'auto'}}>
        <ButtonGroup>
          {operatorKeySet}
        </ButtonGroup>
      </ButtonToolbar>
      <br />
      <ButtonToolbar style={{margin: '5px'}}>
        <ButtonGroup vertical block>
          {equalKey}
        </ButtonGroup>
      </ButtonToolbar>
      <br />
      <ButtonToolbar style={{margin: 'auto'}}>
        <ButtonGroup>
          {clearKeySet}
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default Keypad;

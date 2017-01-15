// @flow
import { ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import React from 'react';
import Key from './key';
import './keypad.css';

function Keypad(props: Object) {
  const row1 = ['1','2','3','+'];
  const row2 = ['4','5','6','-'];
  const row3 = ['7','8','9','*'];
  const row4 = ['0','.','blank','/'];

  let row1KeySet = row1.map((item) => {
    return (
      <Key
        key={item}
        value={item}
        handleClick={props.handleButtonClick}
      />
    );
  });

  let row2KeySet = row2.map((item) => {
    return (
      <Key
        key={item}
        value={item}
        handleClick={props.handleButtonClick}
      />
    );
  });

  let row3KeySet = row3.map((item) => {
    return (
      <Key
        key={item}
        value={item}
        handleClick={props.handleButtonClick}
      />
    );
  });

  let row4KeySet = row4.map((item) => {
    return (
      <Key
        key={item}
        value={item}
        handleClick={props.handleButtonClick}
      />
    );
  });

  let clearKeySet = (
    <div>
      <Key
        key="CLEAR"
        value="CLEAR"
        handleClick={props.handleClearClick}
      />
      <Key
        key="UNDO"
        value="UNDO"
        handleClick={props.handleClearClick}
      />
    </div>
  );

  let equalKey = <Key value="=" handleClick={props.calculate}></Key>;

  return (
    <div>
      <ButtonToolbar id="number-pad" >
        <ButtonGroup>
          {row1KeySet}
        </ButtonGroup>
        <ButtonGroup>
          {row2KeySet}
        </ButtonGroup>
        <ButtonGroup>
          {row3KeySet}
        </ButtonGroup>
        <ButtonGroup>
          {row4KeySet}
        </ButtonGroup>
      </ButtonToolbar>
      <ButtonToolbar id="equals-pad" >
        <ButtonGroup>
          {equalKey}
        </ButtonGroup>
      </ButtonToolbar>
      <br />
      <ButtonToolbar id="clear-pad" >
        <ButtonGroup>
          {clearKeySet}
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default Keypad;

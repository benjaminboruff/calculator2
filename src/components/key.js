// @flow
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-mdl';
import React from 'react';

function Key (props: Object) {
    let symbol = props.value;
    switch (symbol) {
      case '+':
        symbol = '\uFF0B';
        break;
      case '-':
        symbol = '\uFF0D';
        break;
      case '*':
        symbol = '\uFF0A';
        break;
      case '/':
        symbol = '\uFF0F';
        break;
      default:
        break;
    }
    return(
      <Button raised colored
        value={props.value}
        onClick={props.handleClick}>
        {symbol}
      </Button>
    );
}

export default Key;

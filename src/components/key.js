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

    if(props.accent) {
      return(
        <Button raised accent
          style={props.style}
          value={props.value}
          onClick={props.handleClick}>
          {symbol}
        </Button>
      );
    }

    return(
      <Button raised colored
        style={props.style}
        value={props.value}
        onClick={props.handleClick}>
        {symbol}
      </Button>
    );
}

export default Key;

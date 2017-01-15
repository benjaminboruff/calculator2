// @flow
import React from 'react';
import { Well } from 'react-bootstrap';
import './output.css';


function Output(props: Object) {
  return (
    <Well id="display">
      <div id="result">{props.result}</div>
      <div id="input">{props.input}</div>
    </Well>
  );
}

export default Output;

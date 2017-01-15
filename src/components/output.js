// @flow
import React from 'react';
import { Well } from 'react-bootstrap';


function Output(props: Object) {
  return (
    <Well style={{height: '100px'}}>
      <div  style={{paddingRight: '3px', textAlign: 'right', fontSize: '1.6em'}}>{props.result}</div>
      <div style={{marginTop: '20px', textAlign: 'right'}}>{props.input}</div>
    </Well>
  );
}

export default Output;

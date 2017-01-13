// @flow
import React from 'react';

function Output(props: Object) {
  return (
    <div>
      <div  style={{margin: 'auto', paddingRight: '3px', textAlign: 'right', fontSize: '1.6em'}}>{props.result}</div>
      <p style={{margin: 'auto', marginTop: '60px', textAlign: 'right'}}> {props.input}</p>
    </div>
  );
}

export default Output;

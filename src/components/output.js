// @flow
import React from 'react';

function Output(props: Object) {
  return (
    <div>
      <div style={{fontSize: '1.6em'}}>
        {props.result}
      </div>
      <p style={{margin: 'auto', marginTop: '60px'}}> {props.input}</p>
    </div>
  );
}

export default Output;

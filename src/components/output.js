// @flow
import React from 'react';

function Output(props: Object) {
  return (
    <div>
      <h3>{props.result}</h3>
      <p>Input: {props.input}</p>
    </div>
  );
}

export default Output;

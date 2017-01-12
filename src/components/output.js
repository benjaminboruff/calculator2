// @flow
import React from 'react';

function Output(props: Object) {
  return (
    <div>
      <h3>{props.result}</h3>
      <h6>Input: {props.input}</h6>
    </div>
  );
}

export default Output;

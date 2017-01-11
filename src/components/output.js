// @flow
import React from 'react';

function Output(props: Object) {
  return (
    <div>
      <h1>Output: {props.result}</h1>
      <h3>Input: {props.input}</h3>
    </div>
  );
}

export default Output;

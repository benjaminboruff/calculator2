// @flow
import React from 'react';

function Keypad(props: Object) {
  return (
    <div>
      <h1>Keypad</h1>
      <input type="text" onChange={props.handleChange}/>
      <button onClick={props.calculate}>=</button>
    </div>
  );
}

export default Keypad;

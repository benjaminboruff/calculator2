// @flow
import React from 'react';

function Keypad(props: Object) {
  return (
    <div>
      <h1>Keypad</h1>
      <form>
      <input type="text" onChange={props.handleChange}></input>
      </form>
    </div>
  );
}

export default Keypad;

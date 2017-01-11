import React from 'react';

function Key(props) {
  return <button value={props.value} onClick={props.handleClick}>{props.value}</button>;
}

export default Key;

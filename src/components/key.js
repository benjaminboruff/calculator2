import React from 'react';

function Key(props) {
  return <button value={props.number} onClick={props.handleButtonClick}>{props.number}</button>;
}

export default Key;

import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';
import './index.css';

ReactDOM.render(
  <Calculator result='0' input1='1' input2='2'/>,
  document.getElementById('root')
);

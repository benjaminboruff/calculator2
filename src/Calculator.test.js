import React from 'react';
import ReactDOM from 'react-dom';
import { Calculator, removeLeadingZeros } from './Calculator';

// jest doesn't know anything about matchMedia, because jsdom isn't
// a real browser ... so this stub allows the test to pass
window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
});

it('removes leading zeros from "1+1+1"', () => {
  expect(removeLeadingZeros('1+1+1')).toEqual('1+1+1');
});
it('removes leading zeros from "01+01+01"', () => {
  expect(removeLeadingZeros('01+01+01')).toEqual('1+1+1');
});
it('removes leading zeros from "01.0+01.0+01.0"', () => {
  expect(removeLeadingZeros('01.0+01.0+01.0')).toEqual('1.0+1.0+1.0');
});
it('removes leading zeros from "0+01.0+01.0"', () => {
  expect(removeLeadingZeros('0+01.0+01.0')).toEqual('0+1.0+1.0');
});
it('removes leading zeros from "0+0+0"', () => {
  expect(removeLeadingZeros('0+0+0')).toEqual('0+0+0');
});
it('removes leading zeros from "10+0.1+0+0"', () => {
  expect(removeLeadingZeros('10+0.1+0+0')).toEqual('10+.1+0+0');
});

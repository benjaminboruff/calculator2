import React from 'react';
import { shallow } from 'enzyme';
import Key from '../key';

// smoke
it('should render a Key without error', () => {
  // each Key component needs a value of either
  // 0-9, +-*/, a decimal, the equals symbol, CLEAR, or UNDO
  shallow(<Key value="1"/>);
});

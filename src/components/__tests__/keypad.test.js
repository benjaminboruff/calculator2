import React from 'react';
import { shallow } from 'enzyme';
import Keypad from '../keypad';

// smoke
it('it renders Keypad without error', () => {
  shallow(<Keypad />);
});

import React from 'react';
import { shallow } from 'enzyme';
import Output from '../output';

// smoke
it('it renders Output without error', () => {
  shallow(<Output />);
});

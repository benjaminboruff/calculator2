import React from 'react';
import { shallow } from 'enzyme';
import Key from '../key';

// smoke
it('should render a Key without error', () => {
  shallow(<Key />);
});

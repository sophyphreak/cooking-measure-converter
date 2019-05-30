import React from 'react';
import { shallow } from 'enzyme';
import MeasureConverter from '../../../containers/MeasureConverter/MeasureConverter';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<MeasureConverter />);
});

test('should render MeasureConverter correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

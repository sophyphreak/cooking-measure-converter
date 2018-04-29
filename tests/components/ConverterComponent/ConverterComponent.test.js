import React from 'react';
import { shallow } from 'enzyme';
import ConverterComponent from '../../../src/components/ConverterComponent/ConverterComponent';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ConverterComponent />);
});

test('should render ConverterComponent correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

import React from 'react';
import { shallow } from 'enzyme';
import AmountInput from '../../../../src/components/TableRowComponent/AmountInput/AmountInput';

let wrapper, value, onChange;

beforeEach(() => {
  value = '';
  onChange = jest.fn();
  wrapper = shallow(<AmountInput value={value} onChange={onChange} />);
});

test('should render AmountInput correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

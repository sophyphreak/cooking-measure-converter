import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../../../src/components/TableRow/TableRow';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<TableRow />);
});

test('should render TableRow correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

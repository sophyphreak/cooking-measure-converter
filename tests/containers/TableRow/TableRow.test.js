import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../../../src/containers/TableRow/TableRow';

let wrapper, metricDropdown, metricInput, imperialInput, imperialDropdown;

beforeEach(() => {
  metricDropdown = {};
  metricInput = {};
  imperialInput = {};
  imperialDropdown = {};
  wrapper = shallow(
    <TableRow
      metricDropdown={metricDropdown}
      metricInput={metricInput}
      imperialInput={imperialInput}
      imperialDropdown={imperialDropdown}
    />
  );
});

test('should render TableRow correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

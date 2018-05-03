import React from 'react';
import { shallow } from 'enzyme';
import Length from '../../../src/components/Length/Length';

let lengthState,
  onImperialLengthChange,
  onMetricLengthChange,
  lengthProps,
  wrapper;

beforeEach(() => {
  lengthState = {
    imperialLength: '',
    imperialUnit: 'in',
    metricLength: '',
    metricUnit: 'cm'
  };
  onImperialLengthChange = jest.fn();
  onMetricLengthChange = jest.fn();
  lengthProps = {
    lengthState,
    onImperialLengthChange,
    onMetricLengthChange
  };
  wrapper = shallow(<Length lengthProps={lengthProps} />);
});

test('should render Length correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

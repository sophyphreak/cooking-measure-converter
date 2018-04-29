import React from 'react';
import { shallow } from 'enzyme';
import Length from '../../../src/components/Length/Length';

let length, onImperialLengthChange, onMetricLengthChange, lengthProps, wrapper;

beforeEach(() => {
  length = {
    imperialLength: '',
    imperialUnit: 'in',
    metricLength: '',
    metricUnit: 'cm'
  };
  onImperialLengthChange = jest.fn();
  onMetricLengthChange = jest.fn();
  lengthProps = {
    length,
    onImperialLengthChange,
    onMetricLengthChange
  };
  wrapper = shallow(<Length lengthProps={lengthProps} />);
});

test('should render Length correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

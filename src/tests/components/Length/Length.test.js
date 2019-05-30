import React from 'react';
import { shallow } from 'enzyme';
import Length from '../../../components/Length/Length';
import lengthUnitOptions from '../../../containers/MeasureConverter/unitOptions/lengthOptions';

let lengthState,
  onImperialLengthChange,
  onMetricLengthChange,
  lengthProps,
  wrapper;

beforeEach(() => {
  lengthState = {
    imperialLength: '',
    imperialUnit: 'lb',
    metricLength: '',
    metricUnit: 'kg'
  };
  onImperialLengthChange = jest.fn();
  onMetricLengthChange = jest.fn();
  lengthProps = {
    lengthState,
    onImperialLengthChange,
    onMetricLengthChange,
    lengthUnitOptions
  };
  wrapper = shallow(<Length lengthProps={lengthProps} />);
});

test('should render Length correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

import React from 'react';
import { shallow } from 'enzyme';
import Temperature from '../../../src/components/Temperature/Temperature';

let temperatureState,
  onImperialTemperatureChange,
  onMetricTemperatureChange,
  temperatureProps,
  wrapper;

beforeEach(() => {
  temperatureState = {
    imperialTemperature: '',
    metricTemperature: ''
  };
  onImperialTemperatureChange = jest.fn();
  onMetricTemperatureChange = jest.fn();
  temperatureProps = {
    temperatureState,
    onImperialTemperatureChange,
    onMetricTemperatureChange
  };
  wrapper = shallow(<Temperature temperatureProps={temperatureProps} />);
});

test('should render Temperature correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

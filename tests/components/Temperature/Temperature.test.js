import React from 'react';
import { shallow } from 'enzyme';
import Temperature from '../../../src/components/Temperature/Temperature';

let temperature,
  onImperialTemperatureChange,
  onMetricTemperatureChange,
  temperatureProps,
  wrapper;

beforeEach(() => {
  temperature = {
    imperialTemperature: '',
    metricTemperature: ''
  };
  onImperialTemperatureChange = jest.fn();
  onMetricTemperatureChange = jest.fn();
  temperatureProps = {
    temperature,
    onImperialTemperatureChange,
    onMetricTemperatureChange
  };
  wrapper = shallow(<Temperature temperatureProps={temperatureProps} />);
});

test('should render Temperature correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

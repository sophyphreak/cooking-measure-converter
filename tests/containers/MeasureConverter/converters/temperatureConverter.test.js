import temperatureConverter from '../../../../src/containers/MeasureConverter/converters/temperatureConverter';
import metricToImperial from '../../../../src/containers/MeasureConverter/converters/temperatureConverter';
import imperialToMetric from '../../../../src/containers/MeasureConverter/converters/temperatureConverter';

import {
  get1CInputs,
  get1FInputs
} from '../../../fixtures/temperature/temperature';

let inputs;

test('temperatureConverter should return temperature state with 25 C and 77 F', () => {
  inputs = get1CInputs();
  expect(temperatureConverter(inputs)).toEqual({
    imperialTemperature: '77',
    metricTemperature: '25'
  });
});

test('temperatureConverter should return temperature state with 72 F and 22.22 C', () => {
  inputs = get1FInputs();
  expect(temperatureConverter(inputs)).toEqual({
    imperialTemperature: '72',
    metricTemperature: '22.22'
  });
});

test('metricToImperial should return temperature state with 25 C and 77 F', () => {
  inputs = get1CInputs();
  expect(temperatureConverter(inputs)).toEqual({
    imperialTemperature: '77',
    metricTemperature: '25'
  });
});

test('imperialToMetric should return temperature state with 72 F and 22.22 C', () => {
  inputs = get1FInputs();
  expect(temperatureConverter(inputs)).toEqual({
    imperialTemperature: '72',
    metricTemperature: '22.22'
  });
});

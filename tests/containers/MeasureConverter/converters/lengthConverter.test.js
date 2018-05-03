import lengthConverter from '../../../../src/containers/MeasureConverter/converters/lengthConverter';
import metricToImperial from '../../../../src/containers/MeasureConverter/converters/lengthConverter';
import imperialToMetric from '../../../../src/containers/MeasureConverter/converters/lengthConverter';

import { get1CmInputs, get1InInputs } from '../../../fixtures/length/length';

let inputs;

test('lengthConverter should return length state with 1 cm and .39 in', () => {
  inputs = get1CmInputs();
  expect(lengthConverter(inputs)).toEqual({
    imperialLength: '0.39',
    imperialUnit: 'in',
    metricLength: '1',
    metricUnit: 'cm'
  });
});

test('lengthConverter should return length state with 1 in and 2.54 cm', () => {
  inputs = get1InInputs();
  expect(lengthConverter(inputs)).toEqual({
    imperialLength: '1',
    imperialUnit: 'in',
    metricLength: '2.54',
    metricUnit: 'cm'
  });
});

test('metricToImperial should return length state with 1 cm and .39 in', () => {
  inputs = get1CmInputs();
  expect(lengthConverter(inputs)).toEqual({
    imperialLength: '0.39',
    imperialUnit: 'in',
    metricLength: '1',
    metricUnit: 'cm'
  });
});

test('imperialToMetric should return length state with 1 in and 2.54 cm', () => {
  inputs = get1InInputs();
  expect(lengthConverter(inputs)).toEqual({
    imperialLength: '1',
    imperialUnit: 'in',
    metricLength: '2.54',
    metricUnit: 'cm'
  });
});

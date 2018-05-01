import massConverter from '../../../../src/containers/MeasureConverter/converters/massConverter';
import metricToImperial from '../../../../src/containers/MeasureConverter/converters/massConverter';
import imperialToMetric from '../../../../src/containers/MeasureConverter/converters/massConverter';

import { get1KgInputs, get1LbInputs } from '../../../fixtures/mass/mass';

let inputs;

test('massConverter should return massState state with 1 kg and 2.2 lbs', () => {
  inputs = get1KgInputs();
  expect(massConverter(inputs)).toEqual({
    imperialMass: '2.2',
    imperialUnit: 'lb',
    metricMass: '1',
    metricUnit: 'kg'
  });
});

test('massConverter should return massState state with 1 lb and .45 kg', () => {
  inputs = get1LbInputs();
  expect(massConverter(inputs)).toEqual({
    imperialMass: '1',
    imperialUnit: 'lb',
    metricMass: '0.45',
    metricUnit: 'kg'
  });
});

test('metricToImperial should return massState state with 1 kg and 2.2 lb', () => {
  inputs = get1KgInputs();
  expect(massConverter(inputs)).toEqual({
    imperialMass: '2.2',
    imperialUnit: 'lb',
    metricMass: '1',
    metricUnit: 'kg'
  });
});

test('imperialToMetric should return massState state with 1 lb and .45 kg', () => {
  inputs = get1LbInputs();
  expect(massConverter(inputs)).toEqual({
    imperialMass: '1',
    imperialUnit: 'lb',
    metricMass: '0.45',
    metricUnit: 'kg'
  });
});

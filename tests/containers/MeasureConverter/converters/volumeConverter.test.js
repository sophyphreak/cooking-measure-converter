import volumeConverter from '../../../../src/containers/MeasureConverter/converters/volumeConverter';
import metricToImperial from '../../../../src/containers/MeasureConverter/converters/volumeConverter';
import imperialToMetric from '../../../../src/containers/MeasureConverter/converters/volumeConverter';

import { get1MlInputs, get1TbsInputs } from '../../../fixtures/volume/volume';

let inputs;

test('volumeConverter should return volume state with 1 ml and .07 Tbs', () => {
  inputs = get1MlInputs();
  expect(volumeConverter(inputs)).toEqual({
    imperialVolume: '0.07',
    imperialUnit: 'Tbs',
    metricVolume: '1',
    metricUnit: 'ml'
  });
});

test('volumeConverter should return volume state with 1 Tbs and 14.79 ml', () => {
  inputs = get1TbsInputs();
  expect(volumeConverter(inputs)).toEqual({
    imperialVolume: '1',
    imperialUnit: 'Tbs',
    metricVolume: '14.79',
    metricUnit: 'ml'
  });
});

test('metricToImperial should return volume state with 1 ml and .07 Tbs', () => {
  inputs = get1MlInputs();
  expect(volumeConverter(inputs)).toEqual({
    imperialVolume: '0.07',
    imperialUnit: 'Tbs',
    metricVolume: '1',
    metricUnit: 'ml'
  });
});

test('imperialToMetric should return volume state with 1 Tbs and 14.79 ml', () => {
  inputs = get1TbsInputs();
  expect(volumeConverter(inputs)).toEqual({
    imperialVolume: '1',
    imperialUnit: 'Tbs',
    metricVolume: '14.79',
    metricUnit: 'ml'
  });
});

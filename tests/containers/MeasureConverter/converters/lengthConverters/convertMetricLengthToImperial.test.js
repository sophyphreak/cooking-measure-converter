import convertMetricLengthToImperial from '../../../../../src/containers/MeasureConverter/converters/lengthConverters/convertMetricLengthToImperial';

import { get1CmInputs } from '../../../../fixtures/length/length';

let conversionInputs;

test('should return lengthState state with 1 cm and 0.39 in', () => {
  conversionInputs = get1CmInputs();
  expect(convertMetricLengthToImperial(conversionInputs)).toEqual({
    imperialLength: '0.39',
    imperialUnit: 'in',
    metricLength: '1',
    metricUnit: 'cm'
  });
});

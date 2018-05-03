import convertImperialLengthToMetric from '../../../../../src/containers/MeasureConverter/converters/lengthConverters/convertImperialLengthToMetric';

import { get1InInputs } from '../../../../fixtures/length/length';

let conversionInputs;

test('should return lengthState state with 1 in and 2.54 cm', () => {
  conversionInputs = get1InInputs();
  expect(convertImperialLengthToMetric(conversionInputs)).toEqual({
    imperialLength: '1',
    imperialUnit: 'in',
    metricLength: '2.54',
    metricUnit: 'cm'
  });
});

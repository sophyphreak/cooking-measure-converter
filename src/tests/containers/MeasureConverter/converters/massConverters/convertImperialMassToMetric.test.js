import convertImperialMassToMetric from '../../../../../containers/MeasureConverter/converters/massConverters/convertImperialMassToMetric';

import { get1LbInputs } from '../../../../fixtures/mass/mass';

let conversionInputs;

test('should return massState state with 1 lb and .45 kg', () => {
  conversionInputs = get1LbInputs();
  expect(convertImperialMassToMetric(conversionInputs)).toEqual({
    imperialMass: '1',
    imperialUnit: 'lb',
    metricMass: '0.45',
    metricUnit: 'kg'
  });
});

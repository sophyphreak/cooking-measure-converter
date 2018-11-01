import convertMetricMassToImperial from '../../../../../containers/MeasureConverter/converters/massConverters/convertMetricMassToImperial'

import { get1KgInputs } from '../../../../fixtures/mass/mass'

let conversionInputs

test('should return massState state with 1 kg and 2.2 lbs', () => {
  conversionInputs = get1KgInputs()
  expect(convertMetricMassToImperial(conversionInputs)).toEqual({
    imperialMass: '2.2',
    imperialUnit: 'lb',
    metricMass: '1',
    metricUnit: 'kg'
  })
})

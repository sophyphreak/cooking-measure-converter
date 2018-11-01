import convertMetricVolumeToImperial from '../../../../../containers/MeasureConverter/converters/volumeConverters/convertMetricVolumeToImperial'

import { get1MlInputs } from '../../../../fixtures/volume/volume'

let conversionInputs

test('should return volumeState state with 1 ml to 0.07 Tbs', () => {
  conversionInputs = get1MlInputs()
  expect(convertMetricVolumeToImperial(conversionInputs)).toEqual({
    imperialVolume: '0.07',
    imperialUnit: 'Tbs',
    metricVolume: '1',
    metricUnit: 'ml'
  })
})

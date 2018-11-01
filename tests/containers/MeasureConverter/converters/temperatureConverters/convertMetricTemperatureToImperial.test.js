import convertMetricTemperatureToImperial from '../../../../../containers/MeasureConverter/converters/temperatureConverters/convertMetricTemperatureToImperial'

import { get22CInputs } from '../../../../fixtures/temperature/temperature'

let conversionInputs

test('should return temperatureState state with 22 C and 71.6 F', () => {
  conversionInputs = get22CInputs()
  expect(convertMetricTemperatureToImperial(conversionInputs)).toEqual({
    imperialTemperature: '71.6',
    metricTemperature: '22'
  })
})

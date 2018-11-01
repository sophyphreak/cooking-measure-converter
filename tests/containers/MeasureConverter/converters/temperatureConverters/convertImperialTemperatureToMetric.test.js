import convertImperialTemperatureToMetric from '../../../../../containers/MeasureConverter/converters/temperatureConverters/convertImperialTemperatureToMetric'

import { get72FInputs } from '../../../../fixtures/temperature/temperature'

let conversionInputs

test('should return temperatureState state with 72 F and 22.22 C', () => {
  conversionInputs = get72FInputs()
  expect(convertImperialTemperatureToMetric(conversionInputs)).toEqual({
    imperialTemperature: '72',
    metricTemperature: '22.22'
  })
})

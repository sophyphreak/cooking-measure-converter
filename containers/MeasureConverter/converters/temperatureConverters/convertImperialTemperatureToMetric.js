import isInvalidTemperature from '../../validation/isInvalidTemperature'
import doConversion from '../../doConversion/doConversion'

export default ({ temperatureState, event }) => {
  const imperialTemperature = getImperialTemperature({
    temperatureState,
    event
  })
  if (isInvalidTemperature(imperialTemperature)) {
    return temperatureState
  }
  temperatureState = getNewTemperatureState({
    temperatureState,
    imperialTemperature
  })
  return temperatureState
}

const getImperialTemperature = ({ temperatureState, event }) => {
  if (!event) {
    return temperatureState.imperialTemperature
  }
  return event.target.value
}

const getNewTemperatureState = ({ temperatureState, imperialTemperature }) => {
  const conversionInputs = {
    inputAmount: imperialTemperature,
    inputUnit: 'F',
    outputUnit: 'C'
  }
  const metricTemperature = doConversion(conversionInputs)
  return {
    imperialTemperature,
    metricTemperature
  }
}

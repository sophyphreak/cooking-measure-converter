import isInvalidNumber from '../../validation/isInvalidNumber';
import doConversion from '../../doConversion/doConversion';

export default ({ temperatureState, event }) => {
  const metricTemperature = getMetricTemperature({ temperatureState, event });
  if (isInvalidNumber(metricTemperature)) {
    return temperatureState;
  }
  temperatureState = getNewTemperatureState({
    temperatureState,
    metricTemperature
  });
  return temperatureState;
};

const getMetricTemperature = ({ temperatureState, event }) => {
  if (!event) {
    return temperatureState.metricTemperature;
  }
  return event.target.value;
};

const getNewTemperatureState = ({ temperatureState, metricTemperature }) => {
  const conversionInputs = {
    inputAmount: metricTemperature,
    inputUnit: 'C',
    outputUnit: 'F'
  };
  const imperialTemperature = doConversion(conversionInputs);
  return {
    metricTemperature,
    imperialTemperature
  };
};

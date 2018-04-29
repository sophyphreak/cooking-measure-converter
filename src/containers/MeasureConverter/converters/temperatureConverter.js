import isInvalidNumber from '../validation/isInvalidNumber';
import doConversion from '../doConversion/doConversion';

const temperatureConverter = inputs => {
  const { direction, inputAmount, inputTemperatureState } = inputs;
  if (isInvalidNumber(inputAmount)) {
    return inputTemperatureState;
  }
  let outputTemperatureState;
  if (direction === 'metricToImperial') {
    outputTemperatureState = metricToImperial(
      inputAmount,
      inputTemperatureState
    );
  }
  if (direction === 'imperialToMetric') {
    outputTemperatureState = imperialToMetric(
      inputAmount,
      inputTemperatureState
    );
  }
  return outputTemperatureState;
};

export const metricToImperial = (inputAmount, inputTemperatureState) => {
  const conversionInputs = {
    inputAmount,
    inputUnit: 'C',
    outputUnit: 'F'
  };
  const outputAmount = doConversion(conversionInputs);
  const outputTemperatureState = {
    metricTemperature: inputAmount,
    imperialTemperature: outputAmount
  };
  return outputTemperatureState;
};

export const imperialToMetric = (inputAmount, inputTemperatureState) => {
  const {
    imperialUnit: inputUnit,
    metricUnit: outputUnit
  } = inputTemperatureState;
  const conversionInputs = {
    inputAmount,
    inputUnit: 'F',
    outputUnit: 'C'
  };
  const outputAmount = doConversion(conversionInputs);
  const outputTemperatureState = {
    imperialTemperature: inputAmount,
    metricTemperature: outputAmount
  };
  return outputTemperatureState;
};

export default temperatureConverter;

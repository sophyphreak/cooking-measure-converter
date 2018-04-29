import isInvalidNumber from '../validation/isInvalidNumber';
import doConversion from '../doConversion/doConversion';

const lengthConverter = inputs => {
  const { direction, inputAmount, inputLengthState } = inputs;
  if (isInvalidNumber(inputAmount)) {
    return inputLengthState;
  }
  let outputLengthState;
  if (direction === 'metricToImperial') {
    outputLengthState = metricToImperial(inputAmount, inputLengthState);
  }
  if (direction === 'imperialToMetric') {
    outputLengthState = imperialToMetric(inputAmount, inputLengthState);
  }
  return outputLengthState;
};

export const metricToImperial = (inputAmount, inputLengthState) => {
  const { metricUnit: inputUnit, imperialUnit: outputUnit } = inputLengthState;
  const conversionInputs = {
    inputAmount,
    inputUnit,
    outputUnit
  };
  const outputAmount = doConversion(conversionInputs);
  const outputLengthState = {
    metricLength: inputAmount,
    metricUnit: inputUnit,
    imperialLength: outputAmount,
    imperialUnit: outputUnit
  };
  return outputLengthState;
};

export const imperialToMetric = (inputAmount, inputLengthState) => {
  const { imperialUnit: inputUnit, metricUnit: outputUnit } = inputLengthState;
  const conversionInputs = {
    inputAmount,
    inputUnit,
    outputUnit
  };
  const outputAmount = doConversion(conversionInputs);
  const outputLengthState = {
    imperialLength: inputAmount,
    imperialUnit: inputUnit,
    metricLength: outputAmount,
    metricUnit: outputUnit
  };
  return outputLengthState;
};

export default lengthConverter;

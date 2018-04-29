import isInvalidNumber from '../validation/isInvalidNumber';
import doConversion from '../doConversion/doConversion';

const massConverter = inputs => {
  const { direction, inputAmount, inputMassState } = inputs;
  if (isInvalidNumber(inputAmount)) {
    return inputMassState;
  }
  let outputMassState;
  if (direction === 'metricToImperial') {
    outputMassState = metricToImperial(inputAmount, inputMassState);
  }
  if (direction === 'imperialToMetric') {
    outputMassState = imperialToMetric(inputAmount, inputMassState);
  }
  return outputMassState;
};

export const metricToImperial = (inputAmount, inputMassState) => {
  const { metricUnit: inputUnit, imperialUnit: outputUnit } = inputMassState;
  const conversionInputs = {
    inputAmount,
    inputUnit,
    outputUnit
  };
  const outputAmount = doConversion(conversionInputs);
  const outputMassState = {
    metricMass: inputAmount,
    metricUnit: inputUnit,
    imperialMass: outputAmount,
    imperialUnit: outputUnit
  };
  return outputMassState;
};

export const imperialToMetric = (inputAmount, inputMassState) => {
  const { imperialUnit: inputUnit, metricUnit: outputUnit } = inputMassState;
  const conversionInputs = {
    inputAmount,
    inputUnit,
    outputUnit
  };
  const outputAmount = doConversion(conversionInputs);
  const outputMassState = {
    imperialMass: inputAmount,
    imperialUnit: inputUnit,
    metricMass: outputAmount,
    metricUnit: outputUnit
  };
  return outputMassState;
};

export default massConverter;

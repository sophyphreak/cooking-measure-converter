import isInvalidNumber from '../validation/isInvalidNumber';
import doConversion from '../doConversion/doConversion';

// TODO
// Clearly something in here is broken.
// Write unit tests and figure out what it is!
const massConverter = inputs => {
  const { direction, inputAmount, inputMassState } = inputs;
  if (isInvalidNumber(inputAmount)) {
    return inputMassState;
  }
  let outputMassState;
  if (direction === 'metricToImperial') {
    outputMassState = metricToImperial(inputAmount, inputMassState);
  }
  if (direction === 'imperialtoMetric') {
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

export const imperialToMetric = (inputAmount, massState) => {};

export default massConverter;

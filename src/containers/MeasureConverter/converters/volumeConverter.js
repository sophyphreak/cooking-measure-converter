import isInvalidNumber from '../validation/isInvalidNumber';
import doConversion from '../doConversion/doConversion';

const volumeConverter = inputs => {
  const { direction, inputAmount, inputVolumeState } = inputs;
  if (isInvalidNumber(inputAmount)) {
    return inputVolumeState;
  }
  let outputVolumeState;
  if (direction === 'metricToImperial') {
    outputVolumeState = metricToImperial(inputAmount, inputVolumeState);
  }
  if (direction === 'imperialToMetric') {
    outputVolumeState = imperialToMetric(inputAmount, inputVolumeState);
  }
  return outputVolumeState;
};

export const metricToImperial = (inputAmount, inputVolumeState) => {
  const { metricUnit: inputUnit, imperialUnit: outputUnit } = inputVolumeState;
  const conversionInputs = {
    inputAmount,
    inputUnit,
    outputUnit
  };
  const outputAmount = doConversion(conversionInputs);
  const outputVolumeState = {
    metricVolume: inputAmount,
    metricUnit: inputUnit,
    imperialVolume: outputAmount,
    imperialUnit: outputUnit
  };
  return outputVolumeState;
};

export const imperialToMetric = (inputAmount, inputVolumeState) => {
  const { imperialUnit: inputUnit, metricUnit: outputUnit } = inputVolumeState;
  const conversionInputs = {
    inputAmount,
    inputUnit,
    outputUnit
  };
  const outputAmount = doConversion(conversionInputs);
  const outputVolumeState = {
    imperialVolume: inputAmount,
    imperialUnit: inputUnit,
    metricVolume: outputAmount,
    metricUnit: outputUnit
  };
  return outputVolumeState;
};

export default volumeConverter;

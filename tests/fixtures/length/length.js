let direction, inputAmount, inputLengthState;

export const get1CmInputs = () => {
  direction = 'metricToImperial';
  inputAmount = '1';
  inputLengthState = {
    imperialLength: '',
    imperialUnit: 'in',
    metricLength: '',
    metricUnit: 'cm'
  };
  return {
    direction,
    inputAmount,
    inputLengthState
  };
};

export const get1InInputs = () => {
  direction = 'imperialToMetric';
  inputAmount = '1';
  inputLengthState = {
    imperialLength: '',
    imperialUnit: 'in',
    metricLength: '',
    metricUnit: 'cm'
  };
  return {
    direction,
    inputAmount,
    inputLengthState
  };
};

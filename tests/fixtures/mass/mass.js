let direction, inputAmount, inputMassState;

export const get1KgInputs = () => {
  direction = 'metricToImperial';
  inputAmount = '1';
  inputMassState = {
    imperialMass: '',
    imperialUnit: 'lb',
    metricMass: '',
    metricUnit: 'kg'
  };
  return {
    direction,
    inputAmount,
    inputMassState
  };
};

export const get1LbInputs = () => {
  direction = 'imperialToMetric';
  inputAmount = '1';
  inputMassState = {
    imperialMass: '',
    imperialUnit: 'lb',
    metricMass: '',
    metricUnit: 'kg'
  };
  return {
    direction,
    inputAmount,
    inputMassState
  };
};

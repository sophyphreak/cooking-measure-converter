let direction, inputAmount, inputTemperatureState;

export const get1CInputs = () => {
  direction = 'metricToImperial';
  inputAmount = '25';
  inputTemperatureState = {
    imperialTemperature: '',
    metricTemperature: ''
  };
  return {
    direction,
    inputAmount,
    inputTemperatureState
  };
};

export const get1FInputs = () => {
  direction = 'imperialToMetric';
  inputAmount = '72';
  inputTemperatureState = {
    imperialTemperature: '',
    metricTemperature: ''
  };
  return {
    direction,
    inputAmount,
    inputTemperatureState
  };
};

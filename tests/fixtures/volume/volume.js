let direction, inputAmount, inputVolumeState;

export const get1MlInputs = () => {
  direction = 'metricToImperial';
  inputAmount = '1';
  inputVolumeState = {
    imperialVolume: '',
    imperialUnit: 'Tbs',
    metricVolume: '',
    metricUnit: 'ml'
  };
  return {
    direction,
    inputAmount,
    inputVolumeState
  };
};

export const get1TbsInputs = () => {
  direction = 'imperialToMetric';
  inputAmount = '1';
  inputVolumeState = {
    imperialVolume: '',
    imperialUnit: 'Tbs',
    metricVolume: '',
    metricUnit: 'ml'
  };
  return {
    direction,
    inputAmount,
    inputVolumeState
  };
};

let volumeState, newUnit;
let event = {
  target: {
    value: ''
  }
};

export const get1MlInputs = () => {
  volumeState = getInitialVolumeState();
  event.target.value = '1';
  return {
    volumeState,
    event
  };
};

export const get1TbsInputs = () => {
  volumeState = getInitialVolumeState();
  event.target.value = '1';
  return {
    volumeState,
    event
  };
};

export const getInitialVolumeState = () => ({
  imperialVolume: '',
  imperialUnit: 'Tbs',
  metricVolume: '',
  metricUnit: 'ml'
});

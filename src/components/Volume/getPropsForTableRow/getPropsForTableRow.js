export default volumeProps => {
  const metricDropdown = getMetricDropdown(volumeProps);
  const metricInput = getMetricInput(volumeProps);
  const imperialInput = getImperialInput(volumeProps);
  const imperialDropdown = getImperialDropdown(volumeProps);
  return {
    metricDropdown,
    metricInput,
    imperialInput,
    imperialDropdown
  };
};

const getMetricDropdown = volumeProps => {
  const { volumeState, onMetricVolumeChange, volumeUnitOptions } = volumeProps;
  const { metricUnit } = volumeState;
  const { metricUnitOptions } = volumeUnitOptions;
  return {
    value: metricUnit,
    onChange: onMetricVolumeChange,
    options: metricUnitOptions
  };
};

const getMetricInput = volumeProps => {
  const { volumeState, onMetricVolumeChange } = volumeProps;
  const { metricVolume } = volumeState;
  return {
    value: metricVolume,
    onChange: onMetricVolumeChange
  };
};

const getImperialInput = volumeProps => {
  const { volumeState, onImperialVolumeChange } = volumeProps;
  const { imperialVolume } = volumeState;
  return {
    value: imperialVolume,
    onChange: onImperialVolumeChange
  };
};

const getImperialDropdown = volumeProps => {
  const {
    volumeState,
    onImperialVolumeChange,
    volumeUnitOptions
  } = volumeProps;
  const { imperialUnit } = volumeState;
  const { imperialUnitOptions } = volumeUnitOptions;
  return {
    value: imperialUnit,
    onChange: onImperialVolumeChange,
    options: imperialUnitOptions
  };
};

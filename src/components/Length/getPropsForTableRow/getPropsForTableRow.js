export default lengthProps => {
  const metricDropdown = getMetricDropdown(lengthProps);
  const metricInput = getMetricInput(lengthProps);
  const imperialInput = getImperialInput(lengthProps);
  const imperialDropdown = getImperialDropdown(lengthProps);
  return {
    metricDropdown,
    metricInput,
    imperialInput,
    imperialDropdown
  };
};

const getMetricDropdown = lengthProps => {
  const { lengthState, onMetricLengthChange, lengthUnitOptions } = lengthProps;
  const { metricUnit } = lengthState;
  const { metricUnitOptions } = lengthUnitOptions;
  return {
    value: metricUnit,
    onChange: onMetricLengthChange,
    options: metricUnitOptions
  };
};

const getMetricInput = lengthProps => {
  const { lengthState, onMetricLengthChange } = lengthProps;
  const { metricLength } = lengthState;
  return {
    value: metricLength,
    onChange: onMetricLengthChange
  };
};

const getImperialInput = lengthProps => {
  const { lengthState, onImperialLengthChange } = lengthProps;
  const { imperialLength } = lengthState;
  return {
    value: imperialLength,
    onChange: onImperialLengthChange
  };
};

const getImperialDropdown = lengthProps => {
  const {
    lengthState,
    onImperialLengthChange,
    lengthUnitOptions
  } = lengthProps;
  const { imperialUnit } = lengthState;
  const { imperialUnitOptions } = lengthUnitOptions;
  return {
    value: imperialUnit,
    onChange: onImperialLengthChange,
    options: imperialUnitOptions
  };
};

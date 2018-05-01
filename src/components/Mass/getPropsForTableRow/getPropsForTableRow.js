export default massProps => {
  const metricDropdown = getMetricDropdown(massProps);
  const metricInput = getMetricInput(massProps);
  const imperialInput = getImperialInput(massProps);
  const imperialDropdown = getImperialDropdown(massProps);
  return {
    metricDropdown,
    metricInput,
    imperialInput,
    imperialDropdown
  };
};

const getMetricDropdown = massProps => {
  const { mass, onMetricMassChange, massUnitOptions } = massProps;
  const { metricUnit } = mass;
  const { metricUnitOptions } = massUnitOptions;
  return {
    value: metricUnit,
    onChange: onMetricMassChange,
    options: metricUnitOptions
  };
};

const getMetricInput = massProps => {
  const { mass, onMetricMassChange } = massProps;
  const { metricMass } = mass;
  return {
    value: metricMass,
    onChange: onMetricMassChange
  };
};

const getImperialInput = massProps => {
  const { mass, onImperialMassChange } = massProps;
  const { imperialMass } = mass;
  return {
    value: imperialMass,
    onChange: onImperialMassChange
  };
};

const getImperialDropdown = massProps => {
  const { mass, onImperialMassChange, massUnitOptions } = massProps;
  const { imperialUnit } = mass;
  const { imperialUnitOptions } = massUnitOptions;
  return {
    value: imperialUnit,
    onChange: onImperialMassChange,
    options: imperialUnitOptions
  };
};

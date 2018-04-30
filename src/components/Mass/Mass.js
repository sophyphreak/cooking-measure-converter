import React from 'react';
import TableRow from '../TableRow/TableRow';

const Mass = ({ massProps }) => {
  const {
    mass,
    onImperialMassChange,
    onMetricMassChange,
    massUnitOptions,
    onImperialMassUnitChange,
    onMetricMassUnitChange
  } = massProps;
  const { imperialMass, imperialUnit, metricMass, metricUnit } = mass;
  const { imperialUnitOptions, metricUnitOptions } = massUnitOptions;
  const metricDropdown = {
    value: metricUnit,
    onChange: onMetricMassUnitChange,
    options: metricUnitOptions
  };
  const metricInput = {
    value: metricMass,
    onChange: onMetricMassChange
  };
  const imperialInput = {
    value: imperialMass,
    onChange: onImperialMassChange
  };
  const imperialDropdown = {
    value: imperialUnit,
    onChange: onImperialMassUnitChange,
    options: imperialUnitOptions
  };
  return (
    <TableRow
      metricDropdown={metricDropdown}
      metricInput={metricInput}
      imperialInput={imperialInput}
      imperialDropdown={imperialDropdown}
    />
  );
};

export default Mass;

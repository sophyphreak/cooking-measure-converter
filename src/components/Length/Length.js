import React from 'react';
import TableRow from '../../containers/TableRow/TableRow';

const Length = ({ lengthProps }) => {
  const {
    length,
    onImperialLengthChange,
    onMetricLengthChange,
    lengthUnitOptions,
    onImperialLengthUnitChange,
    onMetricLengthUnitChange
  } = lengthProps;
  const { imperialLength, imperialUnit, metricLength, metricUnit } = length;
  const { imperialUnitOptions, metricUnitOptions } = lengthUnitOptions;
  const metricDropdown = {
    value: metricUnit,
    onChange: onMetricLengthUnitChange,
    options: metricUnitOptions
  };
  const metricInput = {
    value: metricLength,
    onChange: onMetricLengthChange
  };
  const imperialInput = {
    value: imperialLength,
    onChange: onImperialLengthChange
  };
  const imperialDropdown = {
    value: imperialUnit,
    onChange: onImperialLengthUnitChange,
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

export default Length;

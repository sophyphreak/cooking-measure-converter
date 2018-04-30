import React from 'react';
import TableRow from '../TableRow/TableRow';

const Temperature = ({ temperatureProps }) => {
  const {
    temperature,
    onImperialTemperatureChange,
    onMetricTemperatureChange
  } = temperatureProps;
  const { imperialTemperature, metricTemperature } = temperature;
  const metricDropdown = 'C';
  const metricInput = {
    value: metricTemperature,
    onChange: onMetricTemperatureChange
  };
  const imperialInput = {
    value: imperialTemperature,
    onChange: onImperialTemperatureChange
  };
  const imperialDropdown = 'F';
  return (
    <TableRow
      metricDropdown={metricDropdown}
      metricInput={metricInput}
      imperialInput={imperialInput}
      imperialDropdown={imperialDropdown}
    />
  );
};

export default Temperature;

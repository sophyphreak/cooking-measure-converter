import React from 'react';
import TableRow from '../TableRow/TableRow';

const Temperature = ({ temperatureProps }) => {
  const {
    temperature,
    onImperialTemperatureChange,
    onMetricTemperatureChange
  } = temperatureProps;
  const { imperialTemperature, metricTemperature } = temperature;
  return (
    <TableRow
      metricUnit="C"
      metricValue={metricTemperature}
      onMetricChange={onMetricTemperatureChange}
      imperialValue={imperialTemperature}
      onImperialChange={onImperialTemperatureChange}
      imperialUnit="F"
    />
  );
};

export default Temperature;

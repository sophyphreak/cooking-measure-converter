import React from 'react';
import TemperatureTableRow from './TempertureTableRow';

const Temperature = ({ temperatureProps }) => {
  const {
    temperature,
    onImperialTemperatureChange,
    onMetricTemperatureChange
  } = temperatureProps;
  const { imperialTemperature, metricTemperature } = temperature;
  const metricLabel = 'C';
  const metricInput = {
    value: metricTemperature,
    onChange: onMetricTemperatureChange
  };
  const imperialInput = {
    value: imperialTemperature,
    onChange: onImperialTemperatureChange
  };
  const imperialLabel = 'F';
  return (
    <TemperatureTableRow
      metricLabel={metricLabel}
      metricInput={metricInput}
      imperialInput={imperialInput}
      imperialLabel={imperialLabel}
    />
  );
};

export default Temperature;

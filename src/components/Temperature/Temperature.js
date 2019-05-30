import React from 'react';
import TemperatureTableRow from './TempertureTableRow';

const Temperature = ({ temperatureProps }) => {
  const {
    temperatureState,
    onImperialTemperatureChange,
    onMetricTemperatureChange
  } = temperatureProps;
  const { imperialTemperature, metricTemperature } = temperatureState;
  const metricLabel = '°c';
  const metricInput = {
    value: metricTemperature,
    onChange: onMetricTemperatureChange
  };
  const imperialInput = {
    value: imperialTemperature,
    onChange: onImperialTemperatureChange
  };
  const imperialLabel = '°f';
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

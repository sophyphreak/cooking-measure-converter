import React from 'react';
import TableRow from '../TableRow/TableRow';

const Volume = ({ volumeProps }) => {
  const {
    volume,
    onImperialVolumeChange,
    onMetricVolumeChange,
    volumeUnitOptions,
    onImperialVolumeUnitChange,
    onMetricVolumeUnitChange
  } = volumeProps;
  const { imperialVolume, imperialUnit, metricVolume, metricUnit } = volume;
  const { imperialUnitOptions, metricUnitOptions } = volumeUnitOptions;
  const metricDropdown = {
    value: metricUnit,
    onChange: onMetricVolumeUnitChange,
    options: metricUnitOptions
  };
  const metricInput = {
    value: metricVolume,
    onChange: onMetricVolumeChange
  };
  const imperialInput = {
    value: imperialVolume,
    onChange: onImperialVolumeChange
  };
  const imperialDropdown = {
    value: imperialUnit,
    onChange: onImperialVolumeUnitChange,
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

export default Volume;

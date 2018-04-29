import React from 'react';
import TableRow from '../TableRow/TableRow';

const Volume = ({ volumeProps }) => {
  const { volume, onImperialVolumeChange, onMetricVolumeChange } = volumeProps;
  const { imperialVolume, imperialUnit, metricVolume, metricUnit } = volume;
  return (
    <TableRow
      metricUnit={metricUnit}
      metricValue={metricVolume}
      onMetricChange={onMetricVolumeChange}
      imperialValue={imperialVolume}
      onImperialChange={onImperialVolumeChange}
      imperialUnit={imperialUnit}
    />
  );
};

export default Volume;

import React from 'react';
import TableRow from '../TableRow/TableRow';

const Mass = ({ massProps }) => {
  const { mass, onImperialMassChange, onMetricMassChange } = massProps;
  const { imperialMass, imperialUnit, metricMass, metricUnit } = mass;
  return (
    <TableRow
      metricUnit={metricUnit}
      metricValue={metricMass}
      onMetricChange={onMetricMassChange}
      imperialValue={imperialMass}
      onImperialChange={onImperialMassChange}
      imperialUnit={imperialUnit}
    />
  );
};

export default Mass;

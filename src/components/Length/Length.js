import React from 'react';
import TableRow from '../TableRow/TableRow';

const Length = ({ lengthProps }) => {
  const { length, onImperialLengthChange, onMetricLengthChange } = lengthProps;
  const { imperialLength, imperialUnit, metricLength, metricUnit } = length;
  return (
    <TableRow
      metricUnit={metricUnit}
      metricValue={metricLength}
      onMetricChange={onMetricLengthChange}
      imperialValue={imperialLength}
      onImperialChange={onImperialLengthChange}
      imperialUnit={imperialUnit}
    />
  );
};

export default Length;

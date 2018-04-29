import React from 'react';
import { Input } from 'reactstrap';

const TableRow = ({
  metricUnit,
  metricValue,
  onMetricChange,
  imperialValue,
  onImperialChange,
  imperialUnit
}) => (
  <tr>
    <th>{metricUnit}</th>
    <td>
      <Input type="text" value={metricValue} onChange={onMetricChange} />
    </td>
    <td>
      <Input type="text" value={imperialValue} onChange={onImperialChange} />
    </td>
    <th>{imperialUnit}</th>
  </tr>
);

export default TableRow;

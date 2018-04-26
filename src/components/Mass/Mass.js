import React from 'react';
import { Input } from 'reactstrap';

const Mass = ({ massProps }) => {
  const { mass, onImperialMassChange, onMetricMassChange } = massProps;
  const { imperialMass, metricMass } = mass;
  return (
    <tr>
      <th>kg</th>
      <td>
        <Input type="text" value={metricMass} onChange={onMetricMassChange} />
      </td>
      <td>
        <Input
          type="text"
          value={imperialMass}
          onChange={onImperialMassChange}
        />
      </td>
      <th>lbs</th>
    </tr>
  );
};

export default Mass;

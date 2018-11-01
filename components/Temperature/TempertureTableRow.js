import React from 'react'

import { Label } from 'reactstrap'
import AmountInput from '../TableRowComponent/AmountInput/AmountInput'

const TemperatureTableRow = ({
  metricLabel,
  metricInput,
  imperialInput,
  imperialLabel
}) => (
  <tr>
    <th>
      <Label className="align-right">{metricLabel}</Label>
    </th>
    <td>
      <AmountInput value={metricInput.value} onChange={metricInput.onChange} />
    </td>
    <td>
      <AmountInput
        value={imperialInput.value}
        onChange={imperialInput.onChange}
      />
    </td>
    <th>
      <Label>{imperialLabel}</Label>
    </th>
  </tr>
)

export default TemperatureTableRow

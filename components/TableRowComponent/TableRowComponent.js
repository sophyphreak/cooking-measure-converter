import React from 'react'

import UnitDropdown from './UnitDropdown/UnitDropdown'
import AmountInput from './AmountInput/AmountInput'

const TableRowComponent = ({
  metricDropdown,
  metricInput,
  imperialInput,
  imperialDropdown
}) => (
  <tr>
    <th>
      <UnitDropdown
        isOpen={metricDropdown.isOpen}
        toggle={metricDropdown.toggle}
        value={metricDropdown.value}
        options={metricDropdown.options}
        onChange={metricDropdown.onChange}
      />
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
      <UnitDropdown
        isOpen={imperialDropdown.isOpen}
        toggle={imperialDropdown.toggle}
        value={imperialDropdown.value}
        options={imperialDropdown.options}
        onChange={imperialDropdown.onChange}
      />
    </th>
  </tr>
)

export default TableRowComponent

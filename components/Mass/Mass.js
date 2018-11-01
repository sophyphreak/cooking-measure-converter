import React from 'react'
import TableRow from '../../containers/TableRow/TableRow'
import getPropsForTableRow from './getPropsForTableRow/getPropsForTableRow'

const Mass = ({ massProps }) => {
  const {
    metricDropdown,
    metricInput,
    imperialInput,
    imperialDropdown
  } = getPropsForTableRow(massProps)
  return (
    <TableRow
      metricDropdown={metricDropdown}
      metricInput={metricInput}
      imperialInput={imperialInput}
      imperialDropdown={imperialDropdown}
    />
  )
}

export default Mass

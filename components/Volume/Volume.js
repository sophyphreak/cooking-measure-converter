import React from 'react'
import TableRow from '../../containers/TableRow/TableRow'
import getPropsForTableRow from './getPropsForTableRow/getPropsForTableRow'

const Volume = ({ volumeProps }) => {
  const {
    metricDropdown,
    metricInput,
    imperialInput,
    imperialDropdown
  } = getPropsForTableRow(volumeProps)
  return (
    <TableRow
      metricDropdown={metricDropdown}
      metricInput={metricInput}
      imperialInput={imperialInput}
      imperialDropdown={imperialDropdown}
    />
  )
}

export default Volume

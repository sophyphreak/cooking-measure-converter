import React from 'react';
import TableRow from '../../containers/TableRow/TableRow';
import getPropsForTableRow from './getPropsForTableRow/getPropsForTableRow';

const Length = ({ lengthProps }) => {
  const {
    metricDropdown,
    metricInput,
    imperialInput,
    imperialDropdown
  } = getPropsForTableRow(lengthProps);
  return (
    <TableRow
      metricDropdown={metricDropdown}
      metricInput={metricInput}
      imperialInput={imperialInput}
      imperialDropdown={imperialDropdown}
    />
  );
};

export default Length;

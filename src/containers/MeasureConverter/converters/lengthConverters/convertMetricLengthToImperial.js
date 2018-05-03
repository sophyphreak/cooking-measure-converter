import isInvalidNumber from '../../validation/isInvalidNumber';
import doConversion from '../../doConversion/doConversion';

export default ({ lengthState, event, newUnit }) => {
  const metricLength = getMetricLength({ lengthState, event });
  const metricUnit = getMetricUnit({ lengthState, newUnit });
  if (isInvalidNumber(metricLength)) {
    return lengthState;
  }
  lengthState = getNewLengthState({ lengthState, metricUnit, metricLength });
  return lengthState;
};

const getMetricUnit = ({ lengthState, newUnit }) =>
  newUnit || lengthState.metricUnit;

const getMetricLength = ({ lengthState, event }) => {
  if (!event) {
    return lengthState.metricLength;
  }
  return event.target.value;
};

const getNewLengthState = ({ lengthState, metricUnit, metricLength }) => {
  const { imperialUnit } = lengthState;
  const conversionInputs = {
    inputAmount: metricLength,
    inputUnit: metricUnit,
    outputUnit: imperialUnit
  };
  const imperialLength = doConversion(conversionInputs);
  return {
    metricLength,
    metricUnit,
    imperialLength,
    imperialUnit
  };
};

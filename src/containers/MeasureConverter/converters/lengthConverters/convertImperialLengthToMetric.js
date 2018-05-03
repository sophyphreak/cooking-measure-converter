import isInvalidNumber from '../../validation/isInvalidNumber';
import doConversion from '../../doConversion/doConversion';

export default ({ lengthState, event, newUnit }) => {
  const imperialLength = getImperialLength({ lengthState, event });
  const imperialUnit = getImperialUnit({ lengthState, newUnit });
  if (isInvalidNumber(imperialLength)) {
    return lengthState;
  }
  lengthState = getNewLengthState({
    lengthState,
    imperialUnit,
    imperialLength
  });
  return lengthState;
};

const getImperialUnit = ({ lengthState, newUnit }) =>
  newUnit || lengthState.imperialUnit;

const getImperialLength = ({ lengthState, event }) => {
  if (!event) {
    return lengthState.imperialLength;
  }
  return event.target.value;
};

const getNewLengthState = ({ lengthState, imperialUnit, imperialLength }) => {
  const { metricUnit } = lengthState;
  const conversionInputs = {
    inputAmount: imperialLength,
    inputUnit: imperialUnit,
    outputUnit: metricUnit
  };
  const metricLength = doConversion(conversionInputs);
  return {
    imperialLength,
    imperialUnit,
    metricLength,
    metricUnit
  };
};

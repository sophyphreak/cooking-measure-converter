import isInvalidNumber from '../../validation/isInvalidNumber';
import doConversion from '../../doConversion/doConversion';

export default ({ massState, event, newImperialUnit }) => {
  const imperialUnit = getImperialUnit({ massState, newImperialUnit });
  const imperialMass = getImperialMass({ massState, event });
  const metricUnit = getMetricUnit({ massState });
  if (isInvalidNumber(imperialMass)) {
    return massState;
  }
  const conversionInputs = {
    inputAmount: imperialMass,
    inputUnit: imperialUnit,
    outputUnit: metricUnit
  };
  const metricMass = doConversion(conversionInputs);
  massState = {
    imperialMass,
    imperialUnit,
    metricMass,
    metricUnit
  };
  return massState;
};

export const getImperialUnit = ({ massState, newImperialUnit }) =>
  newImperialUnit || massState.imperialUnit;

export const getImperialMass = ({ massState, event }) => {
  if (!event) {
    return massState.imperialMass;
  }
  return event.target.value;
};

export const getMetricUnit = ({ massState }) => massState.metricUnit;

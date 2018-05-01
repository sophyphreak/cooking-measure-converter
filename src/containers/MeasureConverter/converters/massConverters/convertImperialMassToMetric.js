import isInvalidNumber from '../../validation/isInvalidNumber';
import doConversion from '../../doConversion/doConversion';

export default ({ massState, event, newImperialUnit }) => {
  const imperialMass = getImperialMass({ massState, event });
  const imperialUnit = getImperialUnit({ massState, newImperialUnit });
  if (isInvalidNumber(imperialMass)) {
    return massState;
  }
  massState = getNewMassState({ massState, imperialUnit, imperialMass });
  return massState;
};

const getImperialUnit = ({ massState, newImperialUnit }) =>
  newImperialUnit || massState.imperialUnit;

const getImperialMass = ({ massState, event }) => {
  if (!event) {
    return massState.imperialMass;
  }
  return event.target.value;
};

const getNewMassState = ({ massState, imperialUnit, imperialMass }) => {
  const { metricUnit } = massState;
  const conversionInputs = {
    inputAmount: imperialMass,
    inputUnit: imperialUnit,
    outputUnit: metricUnit
  };
  const metricMass = doConversion(conversionInputs);
  return {
    imperialMass,
    imperialUnit,
    metricMass,
    metricUnit
  };
};

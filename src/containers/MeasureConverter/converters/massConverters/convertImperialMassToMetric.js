import isInvalidNumber from '../../validation/isInvalidNumber';
import doConversion from '../../doConversion/doConversion';

export default ({ massState, event, newUnit }) => {
  const imperialMass = getImperialMass({ massState, event });
  const imperialUnit = getImperialUnit({ massState, newUnit });
  if (isInvalidNumber(imperialMass)) {
    return massState;
  }
  massState = getNewMassState({ massState, imperialUnit, imperialMass });
  return massState;
};

const getImperialUnit = ({ massState, newUnit }) =>
  newUnit || massState.imperialUnit;

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

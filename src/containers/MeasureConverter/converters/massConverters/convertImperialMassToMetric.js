import isInvalidNumber from '../../validation/isInvalidNumber';
import doConversion from '../../doConversion/doConversion';

export default ({ massState, event, newImperialUnit }) => {
  let { imperialMass, metricUnit, imperialUnit } = massState;
  if (event) {
    imperialMass = event.target.value;
  }
  if (isInvalidNumber(imperialMass)) {
    return massState;
  }
  if (newImperialUnit) {
    imperialUnit = newImperialUnit;
  }
  const converterInputs = {
    inputAmount: imperialMass,
    inputUnit: imperialUnit,
    outputUnit: metricUnit
  };
  const metricMass = doConversion(converterInputs);
  massState = {
    imperialMass,
    imperialUnit,
    metricMass,
    metricUnit
  };
  return massState;
};

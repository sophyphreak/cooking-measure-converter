import isInvalidNumber from '../../validation/isInvalidNumber';
import doConversion from '../../doConversion/doConversion';

export default ({ massState, event, newMetricUnit }) => {
  const metricMass = getMetricMass({ massState, event });
  const metricUnit = getMetricUnit({ massState, newMetricUnit });
  if (isInvalidNumber(metricMass)) {
    return massState;
  }
  massState = getNewMassState({ massState, metricUnit, metricMass });
  return massState;
};

const getMetricUnit = ({ massState, newMetricUnit }) =>
  newMetricUnit || massState.metricUnit;

const getMetricMass = ({ massState, event }) => {
  if (!event) {
    return massState.metricMass;
  }
  return event.target.value;
};

const getNewMassState = ({ massState, metricUnit, metricMass }) => {
  const { imperialUnit } = massState;
  const conversionInputs = {
    inputAmount: metricMass,
    inputUnit: metricUnit,
    outputUnit: imperialUnit
  };
  const metricMass = doConversion(conversionInputs);
  return {
    metricMass,
    metricUnit,
    imperialMass,
    imperialUnit
  };
};

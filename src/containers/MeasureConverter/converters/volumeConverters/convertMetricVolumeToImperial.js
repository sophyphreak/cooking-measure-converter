import isInvalidNumber from '../../validation/isInvalidNumber';
import doConversion from '../../doConversion/doConversion';

export default ({ volumeState, event, newUnit }) => {
  const metricVolume = getMetricVolume({ volumeState, event });
  const metricUnit = getMetricUnit({ volumeState, newUnit });
  if (isInvalidNumber(metricVolume)) {
    return volumeState;
  }
  volumeState = getNewVolumeState({ volumeState, metricUnit, metricVolume });
  return volumeState;
};

const getMetricUnit = ({ volumeState, newUnit }) =>
  newUnit || volumeState.metricUnit;

const getMetricVolume = ({ volumeState, event }) => {
  if (!event) {
    return volumeState.metricVolume;
  }
  return event.target.value;
};

const getNewVolumeState = ({ volumeState, metricUnit, metricVolume }) => {
  const { imperialUnit } = volumeState;
  const conversionInputs = {
    inputAmount: metricVolume,
    inputUnit: metricUnit,
    outputUnit: imperialUnit
  };
  const imperialVolume = doConversion(conversionInputs);
  return {
    metricVolume,
    metricUnit,
    imperialVolume,
    imperialUnit
  };
};

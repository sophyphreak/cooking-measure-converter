import isInvalidNumber from '../../validation/isInvalidNumber';
import doConversion from '../../doConversion/doConversion';

export default ({ volumeState, event, newUnit }) => {
  const imperialVolume = getImperialVolume({ volumeState, event });
  const imperialUnit = getImperialUnit({ volumeState, newUnit });
  if (isInvalidNumber(imperialVolume)) {
    return volumeState;
  }
  volumeState = getNewVolumeState({
    volumeState,
    imperialUnit,
    imperialVolume
  });
  return volumeState;
};

const getImperialUnit = ({ volumeState, newUnit }) =>
  newUnit || volumeState.imperialUnit;

const getImperialVolume = ({ volumeState, event }) => {
  if (!event) {
    return volumeState.imperialVolume;
  }
  return event.target.value;
};

const getNewVolumeState = ({ volumeState, imperialUnit, imperialVolume }) => {
  const { metricUnit } = volumeState;
  const conversionInputs = {
    inputAmount: imperialVolume,
    inputUnit: imperialUnit,
    outputUnit: metricUnit
  };
  const metricVolume = doConversion(conversionInputs);
  return {
    imperialVolume,
    imperialUnit,
    metricVolume,
    metricUnit
  };
};

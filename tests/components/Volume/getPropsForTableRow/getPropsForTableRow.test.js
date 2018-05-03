import getPropsForTableRow from '../../../../src/components/Volume/getPropsForTableRow/getPropsForTableRow';
import volumeUnitOptions from '../../../../src/containers/MeasureConverter/unitOptions/volumeOptions';
import { getInitialVolumeState } from '../../../fixtures/volume/volume';

let volumeProps,
  volumeState,
  onMetricVolumeChange,
  onImperialVolumeChange,
  imperialUnitOptions,
  metricUnitOptions;

beforeEach(() => {
  (volumeState = getInitialVolumeState()),
    (onMetricVolumeChange = jest.fn()),
    (onImperialVolumeChange = jest.fn()),
    (volumeProps = {
      volumeState,
      onMetricVolumeChange,
      onImperialVolumeChange,
      volumeUnitOptions
    });
  imperialUnitOptions = volumeUnitOptions.imperialUnitOptions;
  metricUnitOptions = volumeUnitOptions.metricUnitOptions;
});

test('should return correct props for TableRow', () => {
  expect(getPropsForTableRow(volumeProps)).toEqual({
    metricDropdown: {
      value: volumeState.metricUnit,
      onChange: onMetricVolumeChange,
      options: metricUnitOptions
    },
    metricInput: {
      value: volumeState.metricVolume,
      onChange: onMetricVolumeChange
    },
    imperialInput: {
      value: volumeState.imperialVolume,
      onChange: onImperialVolumeChange
    },
    imperialDropdown: {
      value: volumeState.imperialUnit,
      onChange: onImperialVolumeChange,
      options: imperialUnitOptions
    }
  });
});

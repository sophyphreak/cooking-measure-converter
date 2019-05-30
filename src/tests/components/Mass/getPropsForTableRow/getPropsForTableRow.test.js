import getPropsForTableRow from '../../../../components/Mass/getPropsForTableRow/getPropsForTableRow';
import massUnitOptions from '../../../../containers/MeasureConverter/unitOptions/massOptions';
import { getInitialMassState } from '../../../fixtures/mass/mass';

let massProps,
  massState,
  onMetricMassChange,
  onImperialMassChange,
  imperialUnitOptions,
  metricUnitOptions;

beforeEach(() => {
  (massState = getInitialMassState()),
    (onMetricMassChange = jest.fn()),
    (onImperialMassChange = jest.fn()),
    (massProps = {
      massState,
      onMetricMassChange,
      onImperialMassChange,
      massUnitOptions
    });
  imperialUnitOptions = massUnitOptions.imperialUnitOptions;
  metricUnitOptions = massUnitOptions.metricUnitOptions;
});

test('should return correct props for TableRow', () => {
  expect(getPropsForTableRow(massProps)).toEqual({
    metricDropdown: {
      value: massState.metricUnit,
      onChange: onMetricMassChange,
      options: metricUnitOptions
    },
    metricInput: {
      value: massState.metricMass,
      onChange: onMetricMassChange
    },
    imperialInput: {
      value: massState.imperialMass,
      onChange: onImperialMassChange
    },
    imperialDropdown: {
      value: massState.imperialUnit,
      onChange: onImperialMassChange,
      options: imperialUnitOptions
    }
  });
});

import getPropsForTableRow from '../../../../components/Length/getPropsForTableRow/getPropsForTableRow'
import lengthUnitOptions from '../../../../containers/MeasureConverter/unitOptions/lengthOptions'
import { getInitialLengthState } from '../../../fixtures/length/length'

let lengthProps,
  lengthState,
  onMetricLengthChange,
  onImperialLengthChange,
  imperialUnitOptions,
  metricUnitOptions

beforeEach(() => {
  ;(lengthState = getInitialLengthState()),
    (onMetricLengthChange = jest.fn()),
    (onImperialLengthChange = jest.fn()),
    (lengthProps = {
      lengthState,
      onMetricLengthChange,
      onImperialLengthChange,
      lengthUnitOptions
    })
  imperialUnitOptions = lengthUnitOptions.imperialUnitOptions
  metricUnitOptions = lengthUnitOptions.metricUnitOptions
})

test('should return correct props for TableRow', () => {
  expect(getPropsForTableRow(lengthProps)).toEqual({
    metricDropdown: {
      value: lengthState.metricUnit,
      onChange: onMetricLengthChange,
      options: metricUnitOptions
    },
    metricInput: {
      value: lengthState.metricLength,
      onChange: onMetricLengthChange
    },
    imperialInput: {
      value: lengthState.imperialLength,
      onChange: onImperialLengthChange
    },
    imperialDropdown: {
      value: lengthState.imperialUnit,
      onChange: onImperialLengthChange,
      options: imperialUnitOptions
    }
  })
})

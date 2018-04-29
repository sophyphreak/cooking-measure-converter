import massConverter from '../../../../src/containers/MeasureConverter/converters/massConverter';

let direction, inputAmount, inputMassState, inputs;

beforeEach(() => {
  direction = 'metricToImperial';
  inputAmount = '1';
  inputMassState = {
    imperialMass: '',
    imperialUnit: 'lb',
    metricMass: '',
    metricUnit: 'kg'
  };
  inputs = {
    direction,
    inputAmount,
    inputMassState
  };
});

test('should return mass state with 1 kg and 2.2 lbs', () => {
  expect(massConverter(inputs)).toEqual({
    imperialMass: '2.2',
    imperialUnit: 'lb',
    metricMass: '1',
    metricUnit: 'kg'
  });
});

import massConverter from '../../../../src/containers/MeasureConverter/converters/massConverter';
import metricToImperial from '../../../../src/containers/MeasureConverter/converters/massConverter';
import imperialToMetric from '../../../../src/containers/MeasureConverter/converters/massConverter';

let direction, inputAmount, inputMassState, inputs;

test('massConverter should return mass state with 1 kg and 2.2 lbs', () => {
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
  expect(massConverter(inputs)).toEqual({
    imperialMass: '2.2',
    imperialUnit: 'lb',
    metricMass: '1',
    metricUnit: 'kg'
  });
});

test('massConverter should return mass state with 1 lb and .45 kg', () => {
  direction = 'imperialToMetric';
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
  expect(massConverter(inputs)).toEqual({
    imperialMass: '1',
    imperialUnit: 'lb',
    metricMass: '0.45',
    metricUnit: 'kg'
  });
});

test('metricToImperial should return mass state with 1 kg and 2.2 lb', () => {
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
  expect(massConverter(inputs)).toEqual({
    imperialMass: '2.2',
    imperialUnit: 'lb',
    metricMass: '1',
    metricUnit: 'kg'
  });
});

test('imperialToMetric should return mass state with 1 lb and .45 kg', () => {
  direction = 'imperialToMetric';
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
  expect(massConverter(inputs)).toEqual({
    imperialMass: '1',
    imperialUnit: 'lb',
    metricMass: '0.45',
    metricUnit: 'kg'
  });
});

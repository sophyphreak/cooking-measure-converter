import doConversion from '../../../../src/containers/MeasureConverter/doConversion/doConversion';

let inputAmount, inputUnit, outputUnit, conversionInputs;

beforeEach(() => {
  inputAmount = 1;
  inputUnit = 'kg';
  outputUnit = 'lb';
  conversionInputs = {
    inputAmount,
    inputUnit,
    outputUnit
  };
});

test('should convert 1 kg into 2.2 lbs', () => {
  expect(doConversion(conversionInputs)).toBe('2.2');
});

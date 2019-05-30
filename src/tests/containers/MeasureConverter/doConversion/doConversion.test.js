import doConversion from '../../../../containers/MeasureConverter/doConversion/doConversion';

let inputAmount, inputUnit, outputUnit, conversionInputs;

test('should convert 1 kg into 2.2 lbs', () => {
  inputAmount = 1;
  inputUnit = 'kg';
  outputUnit = 'lb';
  conversionInputs = {
    inputAmount,
    inputUnit,
    outputUnit
  };
  expect(doConversion(conversionInputs)).toBe('2.2');
});

test('should leave lb blank when input is "." kg', () => {
  inputAmount = '.';
  inputUnit = 'kg';
  outputUnit = 'lb';
  conversionInputs = {
    inputAmount,
    inputUnit,
    outputUnit
  };
  expect(doConversion(conversionInputs)).toBe('');
});

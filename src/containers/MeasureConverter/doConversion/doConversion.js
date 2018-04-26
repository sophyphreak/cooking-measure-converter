import convert from 'convert-units';
import roundTo from 'round-to';

const doConversion = conversionInputs => {
  const {
    inputAmount,
    inputUnit,
    outputUnit
  } = conversionInputs;
  if (!inputAmount) {
    return;
  }
  let outputAmount = convert(inputAmount).from(inputUnit).to(outputUnit);
  outputAmount = roundTo(outputAmount, 2);
  return outputAmount;
};

export default doConversion;
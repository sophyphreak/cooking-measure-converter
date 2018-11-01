import convert from 'convert-units'
import roundPrecision from 'round-precision'

const doConversion = conversionInputs => {
  const { inputAmount, inputUnit, outputUnit } = conversionInputs
  if (inputIsNotNumber(inputAmount)) {
    return ''
  }
  let outputAmount = convert(inputAmount)
    .from(inputUnit)
    .to(outputUnit)
  outputAmount = roundPrecision(outputAmount, 2)
  return outputAmount.toString()
}

export default doConversion

const inputIsNotNumber = inputAmount =>
  !!(!inputAmount || inputAmount === '.' || inputAmount === '-')

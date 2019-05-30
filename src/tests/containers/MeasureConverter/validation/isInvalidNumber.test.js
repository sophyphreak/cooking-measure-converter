import isInvalidNumber from '../../../../containers/MeasureConverter/validation/isInvalidNumber';

test('should return true for invalid number input', () => {
  expect(isInvalidNumber('dsfsd')).toBeTruthy();
});

test('should return false for valid number input', () => {
  expect(isInvalidNumber('32432')).toBeFalsy();
});

import lengthOptions from '../../../../containers/MeasureConverter/unitOptions/lengthOptions'

test('should be correct length options', () => {
  expect(lengthOptions).toEqual({
    imperialUnitOptions: ['ft', 'in'],
    metricUnitOptions: ['m', 'cm', 'mm']
  })
})

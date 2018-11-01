import massOptions from '../../../../containers/MeasureConverter/unitOptions/massOptions'

test('should be correct mass options', () => {
  expect(massOptions).toEqual({
    imperialUnitOptions: ['lb', 'oz'],
    metricUnitOptions: ['kg', 'g']
  })
})

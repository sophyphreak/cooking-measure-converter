import volumeOptions from '../../../../src/containers/MeasureConverter/unitOptions/volumeOptions';

test('should be correct volume options', () => {
  expect(volumeOptions).toEqual({
    imperialUnitOptions: ['gal', 'qt', 'pnt', 'cup', 'Tbs', 'tsp'],
    metricUnitOptions: ['l', 'ml']
  });
});

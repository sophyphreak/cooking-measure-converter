import convertImperialVolumeToMetric from '../../../../../src/containers/MeasureConverter/converters/volumeConverters/convertImperialVolumeToMetric';

import { get1TbsInputs } from '../../../../fixtures/volume/volume';

let conversionInputs;

test('should return volumeState state with 1 Tbs and 14.79 ml', () => {
  conversionInputs = get1TbsInputs();
  expect(convertImperialVolumeToMetric(conversionInputs)).toEqual({
    imperialVolume: '1',
    imperialUnit: 'Tbs',
    metricVolume: '14.79',
    metricUnit: 'ml'
  });
});

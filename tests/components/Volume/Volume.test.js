import React from 'react';
import { shallow } from 'enzyme';
import Volume from '../../../src/components/Volume/Volume';
import volumeUnitOptions from '../../../src/containers/MeasureConverter/unitOptions/volumeOptions';

let volumeState,
  onImperialVolumeChange,
  onMetricVolumeChange,
  volumeProps,
  wrapper;

beforeEach(() => {
  volumeState = {
    imperialVolume: '',
    imperialUnit: 'lb',
    metricVolume: '',
    metricUnit: 'kg'
  };
  onImperialVolumeChange = jest.fn();
  onMetricVolumeChange = jest.fn();
  volumeProps = {
    volumeState,
    onImperialVolumeChange,
    onMetricVolumeChange,
    volumeUnitOptions
  };
  wrapper = shallow(<Volume volumeProps={volumeProps} />);
});

test('should render Volume correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

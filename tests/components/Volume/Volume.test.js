import React from 'react';
import { shallow } from 'enzyme';
import Volume from '../../../src/components/Volume/Volume';

let volume, onImperialVolumeChange, onMetricVolumeChange, volumeProps, wrapper;

beforeEach(() => {
  volume = {
    imperialVolume: '',
    imperialUnit: 'Tbs',
    metricVolume: '',
    metricUnit: 'ml'
  };
  onImperialVolumeChange = jest.fn();
  onMetricVolumeChange = jest.fn();
  volumeProps = {
    volume,
    onImperialVolumeChange,
    onMetricVolumeChange
  };
  wrapper = shallow(<Volume volumeProps={volumeProps} />);
});

test('should render Volume correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

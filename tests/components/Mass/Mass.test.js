import React from 'react';
import { shallow } from 'enzyme';
import Mass from '../../../src/components/Mass/Mass';

let mass, onImperialMassChange, onMetricMassChange, massProps, wrapper;

beforeEach(() => {
  mass = {
    imperialMass: '',
    imperialUnit: 'lb',
    metricMass: '',
    metricUnit: 'kg'
  };
  onImperialMassChange = jest.fn();
  onMetricMassChange = jest.fn();
  massProps = {
    mass,
    onImperialMassChange,
    onMetricMassChange
  };
  wrapper = shallow(<Mass massProps={massProps} />);
});

test('should render Mass correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

import React from 'react';
import { shallow } from 'enzyme';
import Mass from '../../../components/Mass/Mass';
import massUnitOptions from '../../../containers/MeasureConverter/unitOptions/massOptions';

let massState, onImperialMassChange, onMetricMassChange, massProps, wrapper;

beforeEach(() => {
  massState = {
    imperialMass: '',
    imperialUnit: 'lb',
    metricMass: '',
    metricUnit: 'kg'
  };
  onImperialMassChange = jest.fn();
  onMetricMassChange = jest.fn();
  massProps = {
    massState,
    onImperialMassChange,
    onMetricMassChange,
    massUnitOptions
  };
  wrapper = shallow(<Mass massProps={massProps} />);
});

test('should render Mass correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

import React from 'react';
import { shallow } from 'enzyme';
import TemperatureTableRow from '../../../components/Temperature/TempertureTableRow';

let metricLabel, metricInput, imperialInput, imperialLabel, wrapper;

beforeEach(() => {
  metricLabel = 'C';
  metricInput = { onChange: jest.fn(), value: '' };
  imperialInput = { onChange: jest.fn(), value: '' };
  imperialLabel = 'F';
  wrapper = shallow(
    <TemperatureTableRow
      metricLabel={metricLabel}
      metricInput={metricInput}
      imperialInput={imperialInput}
      imperialLabel={imperialLabel}
    />
  );
});

test('should render TemperatureTableRow correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

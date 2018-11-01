import React from 'react'
import { shallow } from 'enzyme'
import UnitDropdown from '../../../../components/TableRowComponent/UnitDropdown/UnitDropdown'
import massUnitOptions from '../../../../containers/MeasureConverter/unitOptions/massOptions'

let wrapper, isOpen, toggle, value, options, onChange

beforeEach(() => {
  isOpen = false
  toggle = jest.fn()
  value = 'kg'
  options = massUnitOptions.metricUnitOptions
  onChange = jest.fn()
  wrapper = shallow(
    <UnitDropdown
      isOpen={isOpen}
      toggle={toggle}
      value={value}
      options={options}
      onChange={onChange}
    />
  )
})

test('should render UnitDropdown correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

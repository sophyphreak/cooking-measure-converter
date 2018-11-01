import React from 'react'
import { shallow } from 'enzyme'
import TableRowComponent from '../../../components/TableRowComponent/TableRowComponent'

let wrapper
let metricDropdown = {
  isOpen: false,
  toggle: jest.fn(),
  value: '',
  options: [],
  onChange: jest.fn()
}
let metricInput = {
  value: '',
  onChange: jest.fn()
}
let imperialInput = {
  value: '',
  onChange: jest.fn()
}
let imperialDropdown = {
  isOpen: false,
  toggle: jest.fn(),
  value: '',
  options: [],
  onChange: jest.fn()
}

beforeEach(() => {
  wrapper = shallow(
    <TableRowComponent
      metricDropdown={metricDropdown}
      metricInput={metricInput}
      imperialInput={imperialInput}
      imperialDropdown={imperialDropdown}
    />
  )
})

test('should render TableRowComponent correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

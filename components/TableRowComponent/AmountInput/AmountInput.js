import React from 'react'
import { Input } from 'reactstrap'

const AmountInput = ({ value, onChange }) => (
  <Input
    type="text"
    value={value || ''}
    onChange={event => onChange({ event })}
  />
)

export default AmountInput

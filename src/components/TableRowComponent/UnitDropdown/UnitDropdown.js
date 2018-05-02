import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const UnitDropdown = ({ isOpen, toggle, value, options, onChange }) => (
  <Dropdown isOpen={isOpen} toggle={toggle} value={value}>
    <DropdownToggle caret>{value}</DropdownToggle>
    <DropdownMenu>
      {options.map((option, key) => {
        return (
          <DropdownItem
            key={key}
            value={option}
            onClick={() => onChange({ newUnit: option })}
          >
            {option}
          </DropdownItem>
        );
      })}
    </DropdownMenu>
  </Dropdown>
);

export default UnitDropdown;

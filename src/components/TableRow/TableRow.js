import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from 'reactstrap';

export default class TableRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      metricDropdownOpen: false,
      imperialDropdownOpen: false
    };

    this.toggleMetric = this.toggleMetric.bind(this);
    this.toggleImperial = this.toggleImperial.bind(this);
  }
  toggleMetric() {
    this.setState(prevState => ({
      metricDropdownOpen: !prevState.metricDropdownOpen
    }));
  }

  toggleImperial() {
    this.setState(prevState => ({
      imperialDropdownOpen: !prevState.imperialDropdownOpen
    }));
  }

  render() {
    const {
      metricDropdown,
      metricInput,
      imperialInput,
      imperialDropdown
    } = this.props;
    return (
      // TODO
      //
      // (1) Adapt for string label instead of dropdown button
      // (2) Break out a bunch of this into new components
      <tr>
        <th>
          <Dropdown
            isOpen={this.state.metricDropdownOpen}
            toggle={this.toggleMetric}
            value={metricDropdown.value}
          >
            <DropdownToggle caret>{metricDropdown.value}</DropdownToggle>
            <DropdownMenu>
              {metricDropdown.options.map((option, key) => {
                return (
                  <DropdownItem
                    key={key}
                    value={option}
                    onClick={() => metricDropdown.onChange(option)}
                  >
                    {option}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </th>
        <td>
          <Input
            type="text"
            value={metricInput.value}
            onChange={metricInput.onChange}
          />
        </td>
        <td>
          <Input
            type="text"
            value={imperialInput.value}
            onChange={imperialInput.onChange}
          />
        </td>
        <th>
          <Dropdown
            isOpen={this.state.imperialDropdownOpen}
            toggle={this.toggleImperial}
            value={imperialDropdown.value}
          >
            <DropdownToggle caret>{imperialDropdown.value}</DropdownToggle>
            <DropdownMenu>
              {imperialDropdown.options.map((option, key) => {
                return (
                  <DropdownItem
                    key={key}
                    value={option}
                    onClick={() => imperialDropdown.onChange(option)}
                  >
                    {option}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </th>
      </tr>
    );
  }
}

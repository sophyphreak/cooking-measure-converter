import React from 'react';

import UnitDropdown from '../../components/TableRow/UnitDropdown/UnitDropdown';
import AmountInput from '../../components/TableRow/AmountInput/AmountInput';

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
          <UnitDropdown
            isOpen={this.state.metricDropdownOpen}
            toggle={this.toggleMetric}
            value={metricDropdown.value}
            options={metricDropdown.options}
            onChange={metricDropdown.onChange}
          />
        </th>
        <td>
          <AmountInput
            value={metricInput.value}
            onChange={metricInput.onChange}
          />
        </td>
        <td>
          <AmountInput
            value={imperialInput.value}
            onChange={imperialInput.onChange}
          />
        </td>
        <th>
          <UnitDropdown
            isOpen={this.state.imperialDropdownOpen}
            toggle={this.toggleImperial}
            value={imperialDropdown.value}
            options={imperialDropdown.options}
            onChange={imperialDropdown.onChange}
          />
        </th>
      </tr>
    );
  }
}

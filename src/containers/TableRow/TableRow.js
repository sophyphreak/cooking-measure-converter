import React from 'react';
import TableRowComponent from '../../components/TableRowComponent/TableRowComponent';

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
    let {
      metricDropdown,
      metricInput,
      imperialInput,
      imperialDropdown
    } = this.props;
    metricDropdown.isOpen = this.state.metricDropdownOpen;
    metricDropdown.toggle = this.toggleMetric;
    imperialDropdown.isOpen = this.state.imperialDropdownOpen;
    imperialDropdown.toggle = this.toggleImperial;
    return (
      // TODO
      //
      // (1) Adapt for string label instead of dropdown button
      // (2) Break out a bunch of this into new components
      <TableRowComponent
        metricDropdown={metricDropdown}
        metricInput={metricInput}
        imperialInput={imperialInput}
        imperialDropdown={imperialDropdown}
      />
    );
  }
}

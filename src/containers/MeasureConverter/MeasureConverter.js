import React from 'react';
import convert from 'convert-units';
import roundTo from 'round-to';
import ConverterComponent from '../../components/ConverterComponent/ConverterComponent';

export default class MeasureConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imperialMass: '',
      metricMass: ''
    };
    this.onImperialMassChange = this.onImperialMassChange.bind(this);
    this.onMetricMassChange = this.onMetricMassChange.bind(this);
  };

  onImperialMassChange(e) {
    // in lbs
    const imperialMass = e.target.value;
    const metricMass = imperialMass && roundTo(convert(imperialMass).from('lb').to('kg'), 2);
    this.setState(() => ({ imperialMass, metricMass }));
  };

  onMetricMassChange(e) {
    // in kg
    const metricMass = e.target.value;
    const imperialMass = metricMass && roundTo(convert(metricMass).from('kg').to('lb'), 2);
    this.setState(() => ({ imperialMass, metricMass }));
  };

  render() {
    const {
      imperialMass,
      metricMass
    } = this.state;
    return (
      <ConverterComponent 
        imperialMass={imperialMass}
        onImperialMassChange={this.onImperialMassChange}
        metricMass={metricMass}
        onMetricMassChange={this.onMetricMassChange}
      />
    )
  }
};
import React from 'react';
import ConverterComponent from '../../components/ConverterComponent/ConverterComponent';
import doConversion from './doConversion/doConversion';
import isInvalidNumber from './validation/isInvalidNumber';
import massConverter from './converters/massConverter';

// TODO
//
// Convert this.state into series of objects
// each object has (1) imperialX (2) metricX (3) imperialUnit (4) metricUnit
// When unit changes, it changes the OTHER number

export default class MeasureConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mass: {
        imperialMass: '',
        imperialUnit: 'lb',
        metricMass: '',
        metricUnit: 'kg'
      }
    };
    this.onImperialMassChange = this.onImperialMassChange.bind(this);
    this.onMetricMassChange = this.onMetricMassChange.bind(this);
  }

  onImperialMassChange(e) {
    const imperialMass = e.target.value;
    if (isInvalidNumber(imperialMass)) {
      return;
    }
    const { imperialUnit, metricUnit } = this.state.mass;
    const conversionInputs = {
      inputAmount: imperialMass,
      inputUnit: imperialUnit,
      outputUnit: metricUnit
    };
    const metricMass = doConversion(conversionInputs);
    const mass = {
      imperialMass,
      imperialUnit,
      metricMass,
      metricUnit
    };
    this.setState(() => ({ mass }));
  }

  onMetricMassChange(e) {
    const metricMass = e.target.value;
    const converterInputs = {
      direction: 'metricToImperial',
      inputAmount: metricMass,
      inputMassState: this.state.mass
    };
    const mass = massConverter(converterInputs);
    this.setState(() => ({ mass }));
  }

  render() {
    const massProps = {
      mass: this.state.mass,
      onImperialMassChange: this.onImperialMassChange,
      onMetricMassChange: this.onMetricMassChange
    };
    return <ConverterComponent massProps={massProps} />;
  }
}

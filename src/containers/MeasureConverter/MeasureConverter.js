import React from 'react';
import { isValidPrice as isValidInputNumber } from 'dao-of-validation';
import ConverterComponent from '../../components/ConverterComponent/ConverterComponent';
import doConversion from './doConversion/doConversion';

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
    // TODO
    // break validation below out into own function so it's cleaner, most descriptive
    if (isValidInputNumber(imperialMass)) {
      const {
        imperialUnit,
        metricUnit
      } = this.state.mass;
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
      // TODO
      // Use prevState. Certainly prettier than this current system
      this.setState(() => ({ mass }));
    }
  }

  onMetricMassChange(e) {
    const metricMass = e.target.value;
    // TODO
    // break validation below out into own function so it's cleaner, most descriptive
    if (isValidInputNumber(metricMass)) {
      const {
        imperialUnit,
        metricUnit
      } = this.state.mass;
      const conversionInputs = {
        inputAmount: metricMass,
        inputUnit: metricUnit,
        outputUnit: imperialUnit
      };
      const imperialMass = doConversion(conversionInputs);
      const mass = {
        imperialMass,
        imperialUnit,
        metricMass,
        metricUnit
      };
      // TODO
      // Use prevState. Certainly prettier than this current system
      this.setState(() => ({ mass }));
    }
  }

  render() {
    const { mass } = this.state;
    const massProps = {
      mass,
      onImperialMassChange: this.onImperialMassChange,
      onMetricMassChange: this.onMetricMassChange
    };
    return <ConverterComponent massProps={massProps} />;
  }
}

import React from 'react';
import convert from 'convert-units';
import roundTo from 'round-to';
import { isValidPrice as isValidInputNumber } from 'dao-of-validation';
import ConverterComponent from '../../components/ConverterComponent/ConverterComponent';

// TODO
//
// Convert this.state into series of objects
// each object has (1) imperialX (2) metricX (3) imperialUnit (4) metricUnit
// When unit changes, it changes the OTHER number

export default class MeasureConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      massState: {
        imperialMass: '',
        imperialUnit: 'lbs',
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
      // TODO
      // Refactor: break metricMass setter into new method
      const metricMass =
        imperialMass &&
        roundTo(
          convert(imperialMass)
            .from('lb')
            .to('kg'),
          2 // haha. Prettier, you are funny
        );
      const { imperialUnit, metricUnit } = this.state.massState;
      const massState = {
        imperialMass,
        imperialUnit,
        metricMass,
        metricUnit
      };
      // TODO
      // Use prevState. Certainly prettier than this current system
      this.setState(() => ({ massState }));
    }
  }

  onMetricMassChange(e) {
    const metricMass = e.target.value;
    // TODO
    // break validation below out into own function so it's cleaner, most descriptive
    if (isValidInputNumber(metricMass)) {
      // TODO
      // Refactor: break metricMass setter into new method
      const {
        imperialUnit,
        metricUnit
      } = this.state.massState;
      const imperialMass =
        metricMass &&
        roundTo(
          convert(metricMass)
            .from('kg')
            .to('lb'),
          2 // haha. Prettier, you are funny
        );
      const { imperialUnit, metricUnit } = this.state.massState;
      const massState = {
        imperialMass,
        imperialUnit,
        metricMass,
        metricUnit
      };
      // TODO
      // Use prevState. Certainly prettier than this current system
      this.setState(() => ({ massState }));
    }
  }

  render() {
    const { massState } = this.state;
    const massProps = {
      massState,
      onImperialMassChange: this.onImperialMassChange,
      onMetricMassChange: this.onMetricMassChange
    };
    return <ConverterComponent massProps={massProps} />;
  }
}

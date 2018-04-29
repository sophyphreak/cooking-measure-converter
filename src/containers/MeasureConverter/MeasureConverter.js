import React from 'react';
import ConverterComponent from '../../components/ConverterComponent/ConverterComponent';
import isInvalidNumber from './validation/isInvalidNumber';
import massConverter from './converters/massConverter';
import volumeConverter from './converters/volumeConverter';

// TODO
//
// - mL and tbsp
// - C and F
// - meters and feet
// - When unit changes, it changes the OTHER number

export default class MeasureConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mass: {
        imperialMass: '',
        imperialUnit: 'lb',
        metricMass: '',
        metricUnit: 'kg'
      },
      volume: {
        imperialVolume: '',
        imperialUnit: 'Tbs',
        metricVolume: '',
        metricUnit: 'ml'
      },
      temperature: {
        imperialTemperature: '',
        metricTemperature: ''
      },
      length: {
        imperialLength: '',
        imperialUnit: 'in',
        metricLength: '',
        metricUnit: 'cm'
      }
    };
    this.onImperialMassChange = this.onImperialMassChange.bind(this);
    this.onMetricMassChange = this.onMetricMassChange.bind(this);
    this.onImperialVolumeChange = this.onImperialVolumeChange.bind(this);
    this.onMetricVolumeChange = this.onMetricVolumeChange.bind(this);
    this.onImperialTemperatureChange = this.onImperialTemperatureChange.bind(
      this
    );
    this.onMetricTemperatureChange = this.onMetricTemperatureChange.bind(this);
    this.onImperialLengthChange = this.onImperialLengthChange.bind(this);
    this.onMetricLengthChange = this.onMetricLengthChange.bind(this);
  }

  onImperialMassChange(e) {
    const imperialMass = e.target.value;
    const converterInputs = {
      direction: 'imperialToMetric',
      inputAmount: imperialMass,
      inputMassState: this.state.mass
    };
    const mass = massConverter(converterInputs);
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

  onImperialVolumeChange(e) {
    const imperialVolume = e.target.value;
    const converterInputs = {
      direction: 'imperialToMetric',
      inputAmount: imperialVolume,
      inputVolumeState: this.state.volume
    };
    const volume = volumeConverter(converterInputs);
    this.setState(() => ({ volume }));
  }

  onMetricVolumeChange(e) {
    const metricVolume = e.target.value;
    const converterInputs = {
      direction: 'metricToImperial',
      inputAmount: metricVolume,
      inputVolumeState: this.state.volume
    };
    const volume = volumeConverter(converterInputs);
    this.setState(() => ({ volume }));
  }

  onImperialTemperatureChange(e) {
    const imperialTemperature = e.target.value;
    const converterInputs = {
      direction: 'imperialToMetric',
      inputAmount: imperialTemperature,
      inputTemperatureState: this.state.temperature
    };
    const temperature = temperatureConverter(converterInputs);
    this.setState(() => ({ temperature }));
  }

  onMetricTemperatureChange(e) {
    const metricTemperature = e.target.value;
    const converterInputs = {
      direction: 'metricToImperial',
      inputAmount: metricTemperature,
      inputTemperatureState: this.state.temperature
    };
    const temperature = temperatureConverter(converterInputs);
    this.setState(() => ({ temperature }));
  }

  onImperialLengthChange(e) {
    const imperialLength = e.target.value;
    const converterInputs = {
      direction: 'imperialToMetric',
      inputAmount: imperialLength,
      inputLengthState: this.state.length
    };
    const length = lengthConverter(converterInputs);
    this.setState(() => ({ length }));
  }

  onMetricLengthChange(e) {
    const imperialLength = e.target.value;
    const converterInputs = {
      direction: 'metricToImperial',
      inputAmount: imperialLength,
      inputLengthState: this.state.length
    };
    const length = lengthConverter(converterInputs);
    this.setState(() => ({ length }));
  }

  render() {
    const massProps = {
      mass: this.state.mass,
      onImperialMassChange: this.onImperialMassChange,
      onMetricMassChange: this.onMetricMassChange
    };
    const volumeProps = {
      volume: this.state.volume,
      onImperialVolumeChange: this.onImperialVolumeChange,
      onMetricVolumeChange: this.onMetricVolumeChange
    };
    return (
      <ConverterComponent massProps={massProps} volumeProps={volumeProps} />
    );
  }
}

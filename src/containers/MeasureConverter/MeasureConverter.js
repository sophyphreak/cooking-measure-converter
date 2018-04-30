import React from 'react';
import ConverterComponent from '../../components/ConverterComponent/ConverterComponent';
import isInvalidNumber from './validation/isInvalidNumber';
import massConverter from './converters/massConverter';
import massUnitOptions from './unitOptions/massOptions';
import volumeConverter from './converters/volumeConverter';
import volumeUnitOptions from './unitOptions/volumeOptions';
import temperatureConverter from './converters/temperatureConverter';
import lengthConverter from './converters/lengthConverter';
import lengthUnitOptions from './unitOptions/lengthOptions';

// TODO
//
// - Add unit change functionality
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
      length: {
        imperialLength: '',
        imperialUnit: 'in',
        metricLength: '',
        metricUnit: 'cm'
      },
      temperature: {
        imperialTemperature: '',
        metricTemperature: ''
      }
    };
    this.onImperialMassChange = this.onImperialMassChange.bind(this);
    this.onMetricMassChange = this.onMetricMassChange.bind(this);
    this.onImperialMassUnitChange = this.onImperialMassUnitChange.bind(this);
    this.onMetricMassUnitChange = this.onMetricMassUnitChange.bind(this);
    this.onImperialVolumeChange = this.onImperialVolumeChange.bind(this);
    this.onMetricVolumeChange = this.onMetricVolumeChange.bind(this);
    this.onImperialVolumeUnitChange = this.onImperialVolumeUnitChange.bind(
      this
    );
    this.onMetricVolumeUnitChange = this.onMetricVolumeUnitChange.bind(this);
    this.onImperialLengthChange = this.onImperialLengthChange.bind(this);
    this.onMetricLengthChange = this.onMetricLengthChange.bind(this);
    this.onImperialLengthUnitChange = this.onImperialLengthUnitChange.bind(
      this
    );
    this.onMetricLengthUnitChange = this.onMetricLengthUnitChange.bind(this);
    this.onImperialTemperatureChange = this.onImperialTemperatureChange.bind(
      this
    );
    this.onMetricTemperatureChange = this.onMetricTemperatureChange.bind(this);
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

  onImperialMassUnitChange(imperialUnit) {
    let mass = this.state.mass;
    mass.imperialUnit = imperialUnit;
    this.setState(() => ({ mass }));
  }

  onMetricMassUnitChange(metricUnit) {
    let mass = this.state.mass;
    mass.metricUnit = metricUnit;
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

  onImperialVolumeUnitChange(imperialUnit) {
    let volume = this.state.volume;
    volume.imperialUnit = imperialUnit;
    this.setState(() => ({ volume }));
  }

  onMetricVolumeUnitChange(metricUnit) {
    let volume = this.state.volume;
    volume.metricUnit = metricUnit;
    this.setState(() => ({ volume }));
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

  onImperialLengthUnitChange(imperialUnit) {
    let length = this.state.length;
    length.imperialUnit = imperialUnit;
    this.setState(() => ({ length }));
  }

  onMetricLengthUnitChange(metricUnit) {
    let length = this.state.length;
    length.metricUnit = metricUnit;
    this.setState(() => ({ length }));
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

  render() {
    const massProps = {
      mass: this.state.mass,
      onImperialMassChange: this.onImperialMassChange,
      onMetricMassChange: this.onMetricMassChange,
      massUnitOptions: massUnitOptions,
      onImperialMassUnitChange: this.onImperialMassUnitChange,
      onMetricMassUnitChange: this.onMetricMassUnitChange
    };
    const volumeProps = {
      volume: this.state.volume,
      onImperialVolumeChange: this.onImperialVolumeChange,
      onMetricVolumeChange: this.onMetricVolumeChange,
      volumeUnitOptions: volumeUnitOptions,
      onImperialVolumeUnitChange: this.onImperialVolumeUnitChange,
      onMetricVolumeUnitChange: this.onMetricVolumeUnitChange
    };
    const lengthProps = {
      length: this.state.length,
      onImperialLengthChange: this.onImperialLengthChange,
      onMetricLengthChange: this.onMetricLengthChange,
      lengthUnitOptions: lengthUnitOptions,
      onImperialLengthUnitChange: this.onImperialLengthUnitChange,
      onMetricLengthUnitChange: this.onMetricLengthUnitChange
    };
    const temperatureProps = {
      temperature: this.state.temperature,
      onImperialTemperatureChange: this.onImperialTemperatureChange,
      onMetricTemperatureChange: this.onMetricTemperatureChange
    };
    return (
      <ConverterComponent
        massProps={massProps}
        volumeProps={volumeProps}
        lengthProps={lengthProps}
        temperatureProps={temperatureProps}
      />
    );
  }
}

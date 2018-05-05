import React from 'react';
import ConverterComponent from '../../components/ConverterComponent/ConverterComponent';
import getInitialStateMethods from './getInitialStateMethods/getInitialStateMethods';
import isInvalidNumber from './validation/isInvalidNumber';
import massUnitOptions from './unitOptions/massOptions';
import volumeUnitOptions from './unitOptions/volumeOptions';
import lengthUnitOptions from './unitOptions/lengthOptions';
import doConversion from './doConversion/doConversion';
import convertImperialMassToMetric from './converters/massConverters/convertImperialMassToMetric';
import convertMetricMassToImperial from './converters/massConverters/convertMetricMassToImperial';
import convertImperialVolumeToMetric from './converters/volumeConverters/convertImperialVolumeToMetric';
import convertMetricVolumeToImperial from './converters/volumeConverters/convertMetricVolumeToImperial';
import convertImperialLengthToMetric from './converters/lengthConverters/convertImperialLengthToMetric';
import convertMetricLengthToImperial from './converters/lengthConverters/convertMetricLengthToImperial';
import convertImperialTemperatureToMetric from './converters/temperatureConverters/convertImperialTemperatureToMetric';
import convertMetricTemperatureToImperial from './converters/temperatureConverters/convertMetricTemperatureToImperial';

export default class MeasureConverter extends React.Component {
  constructor(props) {
    super(props);
    const getInitial = getInitialStateMethods();
    this.state = {
      massState: {
        imperialMass: '',
        imperialUnit: getInitial.massImperialUnit(),
        metricMass: '',
        metricUnit: getInitial.massMetricUnit()
      },
      volumeState: {
        imperialVolume: '',
        imperialUnit: getInitial.volumeImperialUnit(),
        metricVolume: '',
        metricUnit: getInitial.volumeMetricUnit()
      },
      lengthState: {
        imperialLength: '',
        imperialUnit: getInitial.lengthImperialUnit(),
        metricLength: '',
        metricUnit: getInitial.lengthMetricUnit()
      },
      temperatureState: {
        imperialTemperature: '',
        metricTemperature: ''
      }
    };
    this.onImperialMassChange = this.onImperialMassChange.bind(this);
    this.onMetricMassChange = this.onMetricMassChange.bind(this);
    this.onImperialVolumeChange = this.onImperialVolumeChange.bind(this);
    this.onMetricVolumeChange = this.onMetricVolumeChange.bind(this);
    this.onImperialLengthChange = this.onImperialLengthChange.bind(this);
    this.onMetricLengthChange = this.onMetricLengthChange.bind(this);
    this.onImperialTemperatureChange = this.onImperialTemperatureChange.bind(
      this
    );
    this.onMetricTemperatureChange = this.onMetricTemperatureChange.bind(this);
  }

  componentDidUpdate() {
    const local = this.state;
    localStorage.setItem('local', JSON.stringify(local));
  }

  onImperialMassChange({ event, newUnit }) {
    let massState = this.state.massState;
    const conversionInputs = {
      massState,
      event,
      newUnit
    };
    massState = convertImperialMassToMetric(conversionInputs);
    this.setState(() => ({ massState }));
  }

  onMetricMassChange({ event, newUnit }) {
    let massState = this.state.massState;
    const conversionInputs = {
      massState,
      event,
      newUnit
    };
    massState = convertMetricMassToImperial(conversionInputs);
    this.setState(() => ({ massState }));
  }

  onImperialVolumeChange({ event, newUnit }) {
    let volumeState = this.state.volumeState;
    const conversionInputs = {
      volumeState,
      event,
      newUnit
    };
    volumeState = convertImperialVolumeToMetric(conversionInputs);
    this.setState(() => ({ volumeState }));
  }

  onMetricVolumeChange({ event, newUnit }) {
    let volumeState = this.state.volumeState;
    const conversionInputs = {
      volumeState,
      event,
      newUnit
    };
    volumeState = convertMetricVolumeToImperial(conversionInputs);
    this.setState(() => ({ volumeState }));
  }

  onImperialLengthChange({ event, newUnit }) {
    let lengthState = this.state.lengthState;
    const conversionInputs = {
      lengthState,
      event,
      newUnit
    };
    lengthState = convertImperialLengthToMetric(conversionInputs);
    this.setState(() => ({ lengthState }));
  }

  onMetricLengthChange({ event, newUnit }) {
    let lengthState = this.state.lengthState;
    const conversionInputs = {
      lengthState,
      event,
      newUnit
    };
    lengthState = convertMetricLengthToImperial(conversionInputs);
    this.setState(() => ({ lengthState }));
  }

  onImperialTemperatureChange({ event }) {
    let temperatureState = this.state.temperatureState;
    const conversionInputs = {
      temperatureState,
      event
    };
    temperatureState = convertImperialTemperatureToMetric(conversionInputs);
    this.setState(() => ({ temperatureState }));
  }

  onMetricTemperatureChange({ event }) {
    let temperatureState = this.state.temperatureState;
    const conversionInputs = {
      temperatureState,
      event
    };
    temperatureState = convertMetricTemperatureToImperial(conversionInputs);
    this.setState(() => ({ temperatureState }));
  }

  render() {
    const massProps = {
      massState: this.state.massState,
      onImperialMassChange: this.onImperialMassChange,
      onMetricMassChange: this.onMetricMassChange,
      massUnitOptions: massUnitOptions
    };
    const volumeProps = {
      volumeState: this.state.volumeState,
      onImperialVolumeChange: this.onImperialVolumeChange,
      onMetricVolumeChange: this.onMetricVolumeChange,
      volumeUnitOptions: volumeUnitOptions
    };
    const lengthProps = {
      lengthState: this.state.lengthState,
      onImperialLengthChange: this.onImperialLengthChange,
      onMetricLengthChange: this.onMetricLengthChange,
      lengthUnitOptions: lengthUnitOptions
    };
    const temperatureProps = {
      temperatureState: this.state.temperatureState,
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

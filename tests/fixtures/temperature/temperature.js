let temperatureState, newUnit;
let event = {
  target: {
    value: ''
  }
};

export const get22CInputs = () => {
  temperatureState = getInitialTemperatureState();
  event.target.value = '22';
  return {
    temperatureState,
    event
  };
};

export const get72FInputs = () => {
  temperatureState = getInitialTemperatureState();
  event.target.value = '72';
  return {
    temperatureState,
    event
  };
};

export const getInitialTemperatureState = () => ({
  imperialTemperature: '',
  metricTemperature: ''
});

let lengthState, newUnit;
let event = {
  target: {
    value: ''
  }
};

export const get1CmInputs = () => {
  lengthState = getInitialLengthState();
  event.target.value = '1';
  return {
    lengthState,
    event
  };
};

export const get1InInputs = () => {
  lengthState = getInitialLengthState();
  event.target.value = '1';
  return {
    lengthState,
    event
  };
};

export const getInitialLengthState = () => ({
  imperialLength: '',
  imperialUnit: 'in',
  metricLength: '',
  metricUnit: 'cm'
});

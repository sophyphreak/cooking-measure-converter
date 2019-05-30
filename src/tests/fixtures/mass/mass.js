let massState, newUnit;
let event = {
  target: {
    value: ''
  }
};

export const get1KgInputs = () => {
  massState = getInitialMassState();
  event.target.value = '1';
  return {
    massState,
    event
  };
};

export const get1LbInputs = () => {
  massState = getInitialMassState();
  event.target.value = '1';
  return {
    massState,
    event
  };
};

export const getInitialMassState = () => ({
  imperialMass: '',
  imperialUnit: 'lb',
  metricMass: '',
  metricUnit: 'kg'
});

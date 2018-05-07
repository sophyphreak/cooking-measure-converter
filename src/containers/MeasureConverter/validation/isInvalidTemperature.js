const isInvalidTemperature = temperature =>
  !(!temperature || temperature.match(/^\-?\d*(\.\d{0,2})?$/));

export default isInvalidTemperature;

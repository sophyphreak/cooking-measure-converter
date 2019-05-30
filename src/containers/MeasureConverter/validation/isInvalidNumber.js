const isInvalidNumber = number =>
  !(!number || number.match(/^\d*(\.\d{0,2})?$/));

export default isInvalidNumber;

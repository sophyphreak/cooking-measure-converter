import { isValidPrice } from 'dao-of-validation';

const isInvalidNumber = number => !isValidPrice(number);

export default isInvalidNumber;
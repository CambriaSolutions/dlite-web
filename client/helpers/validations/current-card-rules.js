'use strict';

import { englishValidatorGenerator }  from './english-validator';
import { expirationDateValidator }    from './date-validator';
import errorMessages                  from '../../presentations/error-messages';


let errorFunction = (name) => {
  return (props) => {
    let errors = [];
    if (!expirationDateValidator(name, props)) {
      errors.push(errorMessages['expirationDateInvalid']);
    }
    return errors;
  }
};
export default {
  month   : errorFunction('month'),
  day     : errorFunction('day'),
  year    : errorFunction('year'),
  number  : englishValidatorGenerator('number')
};

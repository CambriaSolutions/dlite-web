'use strict';

import { englishValidatorGenerator }  from './english-validator';
import { expirationDateValidator }    from './date-validator';
import translations       from '../../i18n';


let errorFunction = (name) => {
  return (props) => {
    let locale = props.locale;
    let errors = [];
    if (!expirationDateValidator(name, props)) {
      errors.push(translations[locale].errorMessages['expirationDateInvalid']);
    }
    return errors;
  }
};

const hasCurrentDL = (props) => {
  let errors = [];
  if (props.hasCurrentDL === '') {
    errors.push(translations.errorMessages['selectionMissing']);
  }
  return errors;
}

export default {
  month         : errorFunction('month'),
  day           : errorFunction('day'),
  year          : errorFunction('year'),
  number        : englishValidatorGenerator('number'),
  hasCurrentDL
};

'use strict';

import translations         from '../../i18n';
import { hasValue }         from '../data/validations';
import selectionValidator   from './selection-validator';

import {
  hasNone,
  hasAnySSN
}             from '../data/ssn';

const ssnAll = (props) => {
  let locale  = props.locale;
  let value   = props.hasSocialSecurity;
  if (!hasValue(value)) {
   return [translations[locale].errorMessages.socialSecurityAvailabilityMissing];
  }
  return [];
};

const socialSecurity = (name, number) => {
  return (props) => {
    let locale = props.locale;
    if (props.hasSocialSecurity !== 'Yes') { return [];};

    if (props[name].length !== number) {
      return [translations[locale].errorMessages['socialSecurityNumberInvalid']];
    } else if (hasNone(props)) {
      return [translations[locale].errorMessages['socialSecurityNumberMissing']];
    }
    return [];
  };
};


export default {
  hasSocialSecurity: selectionValidator('selectionMissing', 'hasSocialSecurity'),
  ssnAll: ssnAll,
  part1: socialSecurity('part1', 3),
  part2: socialSecurity('part2', 2),
  part3: socialSecurity('part3', 4)
};

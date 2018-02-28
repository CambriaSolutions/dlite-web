'use strict';

import translations        from '../../i18n';
import errorMessages       from '../../presentations/error-messages';
import selectionValidator  from './selection-validator';
import {
  hasValue,
  hasOnlyEnglishChars,
  emailRegex
}             from '../data/validations';

import {
  hasNeither,
  hasPhone
}             from '../data/contact-methods';

const emailAddress = (props) => {
  if (props.shouldContact !== 'Yes') { return []; };
  let locale = props.locale;
  let value = props.emailAddress;

  if (hasNeither(props)) {
    //translation missing for errormMessages.contactMethod
    return [errorMessages.contactMethod];
  } else if (!emailRegex(value) && hasValue(value)){
    return [translations[locale].errorMessages.emailAddressMissingOrInvalid];
  } else if (!hasOnlyEnglishChars(value)) {
    return [translations[locale].errorMessages.inputIncludesNonEnglishCharacters];
  }
  return [];
};

const phoneNumber = (name, number) => {
  return (props) => {
    if (props.shouldContact !== 'Yes') { return [];};
    let locale = props.locale;
    if (props[name].length !== number && props[name].length !== 0) {
      return [translations[locale].errorMessages.phoneMissingOrInvalid];
    } else if (hasNeither(props)) {
      return [errorMessages.contactMethod];
    }
    return [];
  };
};

export default {
  shouldContact: selectionValidator('selectionMissing', 'shouldContact'),
  emailAddress: emailAddress,
  phoneNumber1: phoneNumber('phoneNumber1', 3),
  phoneNumber2: phoneNumber('phoneNumber2', 3),
  phoneNumber3: phoneNumber('phoneNumber3', 4)
};

'use strict';

import { combineReducers }    from 'redux';
import updateMailingAddress   from './update-mailing-address';

import updateLegalNames       from './update-legal-name';
import updateResidenceAddress from './update-residence-address';
import updateHairColor        from './update-hair-color';
import updateContactDetails   from './update-contact-details';
import updateEyeColor         from './update-eye-color.js';
import updateDateOfBirth      from './update-date-of-birth.js';

const rootReducer = combineReducers({
  legalName: updateLegalNames,
  residenceAddress: updateResidenceAddress,
  mailingAddress: updateMailingAddress,
  contactDetails: updateContactDetails,
  eyeColor: updateEyeColor,
  hairColor: updateHairColor,
  dateOfBirth: updateDateOfBirth
});

export default rootReducer;
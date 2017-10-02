'use strict';

function generateAction(type) {
  return function action(name, value) {
    return {
      type: type,
      payload: { name, value }
    };
  };
}

export const TYPES = {
  UPDATE_LEGAL_NAME:            'UPDATE_LEGAL_NAME',
  UPDATE_HOME_ADDRESS:          'UPDATE_HOME_ADDRESS',
  UPDATE_MAILING_ADDRESS:       'UPDATE_MAILING_ADDRESS',
  UPDATE_HAIR_COLOR:            'UPDATE_HAIR_COLOR',
  UPDATE_EYE_COLOR:             'UPDATE_EYE_COLOR',
  UPDATE_CONTACT_DETAILS:       'UPDATE_CONTACT_DETAILS',
  UPDATE_DATE_OF_BIRTH:         'UPDATE_DATE_OF_BIRTH',
  UPDATE_SEX:                   'UPDATE_SEX',
  UPDATE_HEIGHT:                'UPDATE_HEIGHT',
  UPDATE_WEIGHT:                'UPDATE_WEIGHT',
  UPDATE_SOCIAL_SECURITY:       'UPDATE_SOCIAL_SECURITY',
  UPDATE_CITIZEN_STATUS:        'UPDATE_CITIZEN_STATUS',
  UPDATE_CONTACT_METHODS:       'UPDATE_CONTACT_METHODS'
};

export const updateLegalName            = generateAction(TYPES.UPDATE_LEGAL_NAME);
export const updateHomeAddress          = generateAction(TYPES.UPDATE_HOME_ADDRESS);
export const updateMailingAddress       = generateAction(TYPES.UPDATE_MAILING_ADDRESS);
export const updateHairColor            = generateAction(TYPES.UPDATE_HAIR_COLOR);
export const updateEyeColor             = generateAction(TYPES.UPDATE_EYE_COLOR);
export const updateContactDetails       = generateAction(TYPES.UPDATE_CONTACT_DETAILS);
export const updateDateOfBirth          = generateAction(TYPES.UPDATE_DATE_OF_BIRTH);
export const updateSex                  = generateAction(TYPES.UPDATE_SEX);
export const updateHeight               = generateAction(TYPES.UPDATE_HEIGHT);
export const updateWeight               = generateAction(TYPES.UPDATE_WEIGHT);
export const updateSocialSecurity       = generateAction(TYPES.UPDATE_SOCIAL_SECURITY);
export const updateCitizenStatus        = generateAction(TYPES.UPDATE_CITIZEN_STATUS);
export const updateContactMethods       = generateAction(TYPES.UPDATE_CONTACT_METHODS);

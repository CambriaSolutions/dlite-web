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
  UPDATE_LEGAL_NAME:                      'UPDATE_LEGAL_NAME',
  UPDATE_HOME_ADDRESS:                    'UPDATE_HOME_ADDRESS',
  UPDATE_MAILING_ADDRESS:                 'UPDATE_MAILING_ADDRESS',
  UPDATE_DATE_OF_BIRTH:                   'UPDATE_DATE_OF_BIRTH',
  UPDATE_TRAITS_HEIGHT_WEIGHT:            'UPDATE_TRAITS_HEIGHT_WEIGHT',
  UPDATE_PHYSICAL_TRAITS:                 'UPDATE_PHYSICAL_TRAITS',
  UPDATE_ORGAN_DONATION:                  'UPDATE_ORGAN_DONATION',
  UPDATE_PRIVILEGE_REMOVED_HISTORY:       'UPDATE_PRIVILEGE_REMOVED_HISTORY',
  UPDATE_DLID_HISTORY:                    'UPDATE_DLID_HISTORY',
  UPDATE_NAMES_HISTORY:                   'UPDATE_NAMES_HISTORY',
  UPDATE_SOCIAL_SECURITY:                 'UPDATE_SOCIAL_SECURITY',
  UPDATE_CITIZEN_STATUS:                  'UPDATE_CITIZEN_STATUS',
  UPDATE_BALLOT_BY_MAIL:                  'UPDATE_BALLOT_BY_MAIL',
  UPDATE_ELIGIBILITY_REQUIREMENTS:        'UPDATE_ELIGIBILITY_REQUIREMENTS',
  UPDATE_POLITICAL_PARTY_CHOOSE:          'UPDATE_POLITICAL_PARTY_CHOOSE',
  UPDATE_BALLOT_LANGUAGE:                 'UPDATE_BALLOT_LANGUAGE',
  UPDATE_OPT_OUT:                         'UPDATE_OPT_OUT',
  UPDATE_CONTACT_METHODS:                  'UPDATE_POLITICAL_METHODS'
};

export const updateLegalName                  = generateAction(TYPES.UPDATE_LEGAL_NAME);
export const updateHomeAddress                = generateAction(TYPES.UPDATE_HOME_ADDRESS);
export const updateMailingAddress             = generateAction(TYPES.UPDATE_MAILING_ADDRESS);
export const updateDateOfBirth                = generateAction(TYPES.UPDATE_DATE_OF_BIRTH);
export const updateTraitsHeightWeight         = generateAction(TYPES.UPDATE_TRAITS_HEIGHT_WEIGHT);
export const updatePhysicalTraits             = generateAction(TYPES.UPDATE_PHYSICAL_TRAITS);
export const updateOrganDonation              = generateAction(TYPES.UPDATE_ORGAN_DONATION);
export const updatePrivilegeRemovedHistory    = generateAction(TYPES.UPDATE_PRIVILEGE_REMOVED_HISTORY);
export const updateDlidHistory                = generateAction(TYPES.UPDATE_DLID_HISTORY);
export const updateNamesHistory               = generateAction(TYPES.UPDATE_NAMES_HISTORY);
export const updateSocialSecurity             = generateAction(TYPES.UPDATE_SOCIAL_SECURITY);
export const updateCitizenStatus              = generateAction(TYPES.UPDATE_CITIZEN_STATUS);
export const updateBallotByMail               = generateAction(TYPES.UPDATE_BALLOT_BY_MAIL);
export const updateEligibilityRequirements    = generateAction(TYPES.UPDATE_ELIGIBILITY_REQUIREMENTS);
export const updatePoliticalPartyChoose       = generateAction(TYPES.UPDATE_POLITICAL_PARTY_CHOOSE);
export const updateBallotLanguage             = generateAction(TYPES.UPDATE_BALLOT_LANGUAGE);
export const updateOptOut                     = generateAction(TYPES.UPDATE_OPT_OUT);
export const updateContactMethods             = generateAction(TYPES.UPDATE_CONTACT_METHODS);

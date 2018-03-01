'use strict';

function generateFormAction(type) {
  return function formAction(name, value) {
    return {
      type: type,
      payload: { name, value }
    };
  };
}

function generateValueAction(type) {
  return (value) => {
    return {
      type: type,
      payload: { value }
    };
  };
}

export const TYPES = {
  CREATE_APPLICATION_ID:                  'CREATE_APPLICATION_ID',
  UPDATE_LANGUAGE:                        'UPDATE_LANGUAGE',
  UPDATE_LEGAL_NAME:                      'UPDATE_LEGAL_NAME',
  UPDATE_CARD_ACTION:                     'UPDATE_CARD_ACTION',
  UPDATE_CARD_TYPE:                       'UPDATE_CARD_TYPE',
  UPDATE_YOUTH_ID_INSTEAD:                'UPDATE_YOUTH_ID_INSTEAD',
  UPDATE_CARD_CHANGES:                    'UPDATE_CARD_CHANGES',
  UPDATE_CARD_REPLACEMENT:                'UPDATE_CARD_REPLACEMENT',
  UPDATE_CURRENT_CARD_INFO:               'UPDATE_CURRENT_CARD_INFO',
  UPDATE_REDUCED_FEE:                     'UPDATE_REDUCED_FEE',
  UPDATE_REAL_ID:                         'UPDATE_REAL_ID',
  UPDATE_SENIOR_ID:                       'UPDATE_SENIOR_ID',
  UPDATE_LICENSE_TYPE:                    'UPDATE_LICENSE_TYPE',
  UPDATE_ADDRESS:                         'UPDATE_ADDRESS',
  UPDATE_HOME_ADDRESS:                    'UPDATE_HOME_ADDRESS',
  UPDATE_MAILING_ADDRESS:                 'UPDATE_MAILING_ADDRESS',
  UPDATE_DATE_OF_BIRTH:                   'UPDATE_DATE_OF_BIRTH',
  UPDATE_TRAITS_HEIGHT_WEIGHT:            'UPDATE_TRAITS_HEIGHT_WEIGHT',
  UPDATE_PHYSICAL_TRAITS:                 'UPDATE_PHYSICAL_TRAITS',
  UPDATE_ORGAN_DONATION:                  'UPDATE_ORGAN_DONATION',
  UPDATE_LICENSE_ISSUES:                  'UPDATE_LICENSE_ISSUES',
  UPDATE_LICENSE_AND_ID_HISTORY:          'UPDATE_LICENSE_AND_ID_HISTORY',
  UPDATE_NAMES_HISTORY:                   'UPDATE_NAMES_HISTORY',
  UPDATE_MEDICAL_HISTORY:                 'UPDATE_MEDICAL_HISTORY',
  UPDATE_SOCIAL_SECURITY:                 'UPDATE_SOCIAL_SECURITY',
  UPDATE_VETERANS_SERVICE:                'UPDATE_VETERANS_SERVICE',
  UPDATE_CITIZEN_STATUS:                  'UPDATE_CITIZEN_STATUS',
  UPDATE_BALLOT_BY_MAIL:                  'UPDATE_BALLOT_BY_MAIL',
  UPDATE_ELIGIBILITY_REQUIREMENTS:        'UPDATE_ELIGIBILITY_REQUIREMENTS',
  UPDATE_POLITICAL_PARTY_CHOOSE:          'UPDATE_POLITICAL_PARTY_CHOOSE',
  UPDATE_POLITICAL_PARTY_CHOOSE_PREREG:   'UPDATE_POLITICAL_PARTY_CHOOSE_PREREG',
  UPDATE_OPT_OUT:                         'UPDATE_OPT_OUT',
  UPDATE_CONTACT_METHODS:                 'UPDATE_POLITICAL_METHODS',
  UPDATE_GUARDIAN_SIGNATURE:              'UPDATE_GUARDIAN_SIGNATURE',
  UPDATE_GUARDIAN_SIGNATURE_FIRST:        'UPDATE_GUARDIAN_SIGNATURE_FIRST',
  UPDATE_GUARDIAN_SIGNATURE_SECOND:       'UPDATE_GUARDIAN_SIGNATURE_SECOND',
  UPDATE_GUARDIAN_CONTACT_DETAILS_FIRST:  'UPDATE_GUARDIAN_CONTACT_DETAILS_FIRST',
  UPDATE_GUARDIAN_CONTACT_DETAILS_SECOND: 'UPDATE_GUARDIAN_CONTACT_DETAILS_SECOND',
  UPDATE_GUARDIAN_ID_DOC_FIRST:           'UPDATE_GUARDIAN_ID_DOC_FIRST',
  UPDATE_GUARDIAN_ID_DOC_SECOND:          'UPDATE_GUARDIAN_ID_DOC_SECOND',
  UPDATE_CDL_LEGAL_NAME:                  'UPDATE_CDL_LEGAL_NAME',
  UPDATE_CDL_DOB:                         'UPDATE_CDL_DOB',
  UPDATE_CDL_CARD_ACTION:                 'UPDATE_CDL_CARD_ACTION',
  UPDATE_CDL_RESIDENCY:                   'UPDATE_CDL_RESIDENCY',

  FOCUS_PAGE_ELEMENT:                     'FOCUS_PAGE_ELEMENT',
  BLUR_PAGE_ELEMENT:                      'BLUR_PAGE_ELEMENT',
  TOGGLE_ACCORDION:                       'TOGGLE_ACCORDION',
  CHANGE_SECTION:                         'CHANGE_SECTION',
  CLEAR_VALIDATIONS:                      'CLEAR_VALIDATIONS',
  ADD_VALIDATION:                         'ADD_VALIDATION',
  REMOVE_VALIDATION:                      'REMOVE_VALIDATION',
  HOVER_UP:                               'HOVER_UP',
  HOVER_DOWN:                             'HOVER_DOWN',
  CLEAR_HOVER:                            'CLEAR_HOVER',
  ADD_APP:                                'ADD_APP',
  CHOOSE_APP:                             'CHOOSE_APP',
  UPDATE_LOCALE:                          'UPDATE_LOCALE'
};

export const createApplicationID                      = generateFormAction(TYPES.CREATE_APPLICATION_ID);
export const updateLanguage                           = generateFormAction(TYPES.UPDATE_LANGUAGE);
export const updateLegalName                          = generateFormAction(TYPES.UPDATE_LEGAL_NAME);
export const updateCardAction                         = generateFormAction(TYPES.UPDATE_CARD_ACTION);
export const updateCardType                           = generateFormAction(TYPES.UPDATE_CARD_TYPE);
export const updateYouthIDInstead                     = generateFormAction(TYPES.UPDATE_YOUTH_ID_INSTEAD);
export const updateCardChanges                        = generateFormAction(TYPES.UPDATE_CARD_CHANGES);
export const updateCardReplacement                    = generateFormAction(TYPES.UPDATE_CARD_REPLACEMENT);
export const updateCurrentCardInfo                    = generateFormAction(TYPES.UPDATE_CURRENT_CARD_INFO);
export const updateReducedFee                         = generateFormAction(TYPES.UPDATE_REDUCED_FEE);
export const updateRealID                             = generateFormAction(TYPES.UPDATE_REAL_ID);
export const updateSeniorID                           = generateFormAction(TYPES.UPDATE_SENIOR_ID);
export const updateLicenseType                        = generateFormAction(TYPES.UPDATE_LICENSE_TYPE);
export const updateAddress                            = generateFormAction(TYPES.UPDATE_ADDRESS);
export const updateHomeAddress                        = generateFormAction(TYPES.UPDATE_HOME_ADDRESS);
export const updateMailingAddress                     = generateFormAction(TYPES.UPDATE_MAILING_ADDRESS);
export const updateDateOfBirth                        = generateFormAction(TYPES.UPDATE_DATE_OF_BIRTH);
export const updateTraitsHeightWeight                 = generateFormAction(TYPES.UPDATE_TRAITS_HEIGHT_WEIGHT);
export const updatePhysicalTraits                     = generateFormAction(TYPES.UPDATE_PHYSICAL_TRAITS);
export const updateOrganDonation                      = generateFormAction(TYPES.UPDATE_ORGAN_DONATION);
export const updateLicenseIssues                      = generateFormAction(TYPES.UPDATE_LICENSE_ISSUES);
export const updateLicenseAndIdHistory                = generateFormAction(TYPES.UPDATE_LICENSE_AND_ID_HISTORY);
export const updateNamesHistory                       = generateFormAction(TYPES.UPDATE_NAMES_HISTORY);
export const updateMedicalHistory                     = generateFormAction(TYPES.UPDATE_MEDICAL_HISTORY);
export const updateSocialSecurity                     = generateFormAction(TYPES.UPDATE_SOCIAL_SECURITY);
export const updateVeteranService                     = generateFormAction(TYPES.UPDATE_VETERANS_SERVICE);
export const updateCitizenStatus                      = generateFormAction(TYPES.UPDATE_CITIZEN_STATUS);
export const updateBallotByMail                       = generateFormAction(TYPES.UPDATE_BALLOT_BY_MAIL);
export const updateEligibilityRequirements            = generateFormAction(TYPES.UPDATE_ELIGIBILITY_REQUIREMENTS);
export const updatePoliticalPartyChoose               = generateFormAction(TYPES.UPDATE_POLITICAL_PARTY_CHOOSE);
export const updatePoliticalPartyChoosePreReg         = generateFormAction(TYPES.UPDATE_POLITICAL_PARTY_CHOOSE_PREREG);
export const updateOptOut                             = generateFormAction(TYPES.UPDATE_OPT_OUT);
export const updateContactMethods                     = generateFormAction(TYPES.UPDATE_CONTACT_METHODS);

export const updateGuardianSignature                  = generateFormAction(TYPES.UPDATE_GUARDIAN_SIGNATURE);
export const updateGuardianSignatureFirst             = generateFormAction(TYPES.UPDATE_GUARDIAN_SIGNATURE_FIRST);
export const updateGuardianSignatureSecond            = generateFormAction(TYPES.UPDATE_GUARDIAN_SIGNATURE_SECOND);
export const updateGuardianContactDetailsFirst        = generateFormAction(TYPES.UPDATE_GUARDIAN_CONTACT_DETAILS_FIRST);
export const updateGuardianContactDetailsSecond       = generateFormAction(TYPES.UPDATE_GUARDIAN_CONTACT_DETAILS_SECOND);

export const chooseApp                                = generateFormAction(TYPES.CHOOSE_APP);
export const updateCdlLegalName                       = generateFormAction(TYPES.UPDATE_CDL_LEGAL_NAME);
export const updateCdlDob                             = generateFormAction(TYPES.UPDATE_CDL_DOB);
export const updateCdlCardAction                      = generateFormAction(TYPES.UPDATE_CDL_CARD_ACTION);
export const updateCdlResidency                       = generateFormAction(TYPES.UPDATE_CDL_RESIDENCY);

export const focusPageElement                         = generateValueAction(TYPES.FOCUS_PAGE_ELEMENT);
export const blurPageElement                          = generateValueAction(TYPES.BLUR_PAGE_ELEMENT);
export const toggleAccordion                          = generateValueAction(TYPES.TOGGLE_ACCORDION);
export const changeSection                            = generateValueAction(TYPES.CHANGE_SECTION);
export const clearValidations                         = generateValueAction(TYPES.CLEAR_VALIDATIONS);
export const addValidation                            = generateValueAction(TYPES.ADD_VALIDATION);
export const removeValidation                         = generateValueAction(TYPES.REMOVE_VALIDATION);
export const hoverUp                                  = generateValueAction(TYPES.HOVER_UP);
export const hoverDown                                = generateValueAction(TYPES.HOVER_DOWN);
export const clearHover                               = generateValueAction(TYPES.CLEAR_HOVER);
export const addApp                                   = generateValueAction(TYPES.ADD_APP);
export const updateLocale                             = generateValueAction(TYPES.UPDATE_LOCALE);

'use strict';
import { hasValue }     from './validations';
import * as dataPresent from '../data-present';
import translations     from '../../i18n';

export const licenseAndIdIssued = (props) => {
  return props.licenseAndIdHistory.isIssued === 'Yes';
};

export const showIssuedIn = (props) => {
  return licenseAndIdIssued(props) && hasValue(props.licenseAndIdHistory.issuedBy);
};

export const showExpirationDate = (props) => {
  return licenseAndIdIssued(props) && dataPresent.date(props.licenseAndIdHistory);
};

export const cardNumber = (props) => {
  let key = 'None';
  if (licenseAndIdIssued(props)) {
    key = props.licenseAndIdHistory.DLIDNumber || props.licenseAndIdHistory.number
  }
  return key;
};

export const licenseIssuesIsSuspended = (props) => {
  return props.licenseIssues.isSuspended === 'Yes';
};

export const hasMedical = (props) => {
  return props.medicalHistory.hasMedicalCondition === 'Yes';
};

export const hasUsedPreviousNames = (props) => {
  return props.namesHistory.hasUsedPreviousNames === 'Yes';
};

export const getStringByMedical = (props) => {
  return hasMedical(props) ? props.medicalHistory.medicalInfo : 'None';
};

export const getStringByPreviousNames = (props) => {
  return hasUsedPreviousNames(props) ? props.namesHistory.previousNames : 'None';
};

export const cardNumberOrNone = (props) => {
  let key = 'None';
  if (hasValue(props.number)) {
    key = props.number;
  }
  return key;
};

export const hasOtherStateLicenses = (props) => {
  return props.otherStateLicenses.hasNonCALicense === 'Yes';
};

export const getTenYearHistorySelection = (props) => {
  let locale = props.locale;
  if(props.otherStateLicenses.tenYearHistory === 'online') { return translations[locale].tenYearHistoryPage.fillOutHistoryVia.answerOnline}
  if(props.otherStateLicenses.tenYearHistory === 'home') { return translations[locale].tenYearHistoryPage.fillOutHistoryVia.answerPrint}
  if(props.otherStateLicenses.tenYearHistory === 'field') { return translations[locale].tenYearHistoryPage.fillOutHistoryVia.answerField}
};

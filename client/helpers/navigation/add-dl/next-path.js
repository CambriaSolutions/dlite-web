'use strict';

import {
  hasExistingCard,
  isChangingCard,
  isReplacingCard
}    from '../../data/card-actions';

export const addWdywtdt = (props) => {
  let key = 'addLicenseClass';
  if (hasExistingCard(props)) {
    key = 'addCurrentCardInfo';
  }
  return key;
};

export const addCurrentCardInfo = (props) => {
  let key = 'addLicenseClass';
  if (isChangingCard(props)) {
    key = 'addUpdateCorrect';
  } else if (isReplacingCard(props)) {
    key = 'addReplacementDetails';
  }
  return key;
};

export const addMedicalHistory = (props) => {
  let key = 'addLicenseHistory';
  if (hasExistingCard(props)) {
    key = 'addIssueHistory';
  }
  return key;
};
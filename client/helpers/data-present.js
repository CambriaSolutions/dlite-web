'use strict';

const value = (props) => {
  return !!(props && props.trim());
};

const hasAllAttributes = (props, attributes) => {
  if (!props) { return; }

  return attributes.every((attributeName) => {
    return value(props[attributeName]);
  });
};

const hasAnyAttributes = (props, attributes) => {
  if (!props) { return; }

  return attributes.some((attributeName) => {
    return value(props[attributeName]);
  });
};

const legalName = (props) => {
  return hasAllAttributes(props, ['lastName']);
};

const date = (props) => {
  return hasAllAttributes(props, ['month', 'day', 'year']);
};

const address = (props) => {
  return hasAnyAttributes(props, ['street_1', 'street_2', 'city', 'zip'])
};

const height = (props) => {
  return hasAllAttributes(props, ['feet']);
}

const socialSecurity = (props) => {
  return hasAllAttributes(props, ['part1', 'part2', 'part3'])
}

const suspendedLicenseInfo = (props) => {
  return date(props) || hasAnyAttributes(props, ['reason', 'isSuspended']);
}

const existingDLIDInfo = (props) => {
  return date(props) || hasAnyAttributes(props, ['DLIDNumber', 'issuedBy', 'hasExisting']);
}

const previousNamesInfo = (props) => {
  return hasAnyAttributes(props, ['names', 'hasPreviousNames']);
}

const politicalContact = (props) => {
  return value(props.shouldContact) &&
    hasAnyAttributes(props, ['emailAddress', 'phoneNumber']);
}

const application = (props) => {
  return legalName(props.legalName) ||
    date(props.dateOfBirth) ||
    address(props.homeAddress) ||
    address(props.mailingAddress) ||
    value(props.sex) ||
    value(props.eyeColor) ||
    value(props.hairColor) ||
    height(props.height) ||
    value(props.weight) ||
    value(props.organ) ||
    value(props.donateContribution) ||
    socialSecurity(props.socialSecurity) ||
    suspendedLicenseInfo(props.suspendedLicenseInfo) ||
    previousNamesInfo(props.previousNamesInfo) ||
    existingDLIDInfo(props.existingDLIDInfo) ||
    value(props.citizenStatus) ||
    value(props.ballotByMail) ||
    value(props.eligibilityRequirements) ||
    value(props.politicalPartyChoose) ||
    value(props.politicalPartyPreference) ||
    value(props.ballotLanguage) ||
    value(props.optOut) ||
    politicalContact(props.politicalContact);
};

export {
  value,
  legalName,
  address,
  date,
  height,
  socialSecurity,
  suspendedLicenseInfo,
  previousNamesInfo,
  existingDLIDInfo,
  politicalContact,
  application
};

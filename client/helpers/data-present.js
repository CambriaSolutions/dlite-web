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

const traitsHeightWeight = (props) => {
  return hasAllAttributes(props, ['weight', 'feet', 'inches']);
}

const organDonation = (props) => {
  return hasAllAttributes(props, ['donate', 'contribute'])
};

const socialSecurity = (props) => {
  return hasAllAttributes(props, ['part1', 'part2', 'part3'])
}

const privilegeRemovedHistory = (props) => {
  return date(props) || hasAnyAttributes(props, ['reason', 'isSuspended']);
}

const existingDLIDInfo = (props) => {
  return date(props) || hasAnyAttributes(props, ['DLIDNumber', 'issuedBy', 'hasExisting']);
}

const namesHistory = (props) => {
  return hasAllAttributes(props, ['hasUsedPreviousNames', 'previousNames']);
}

const hasPreviousNames = (props) => {
  return hasAllAttributes(props, ['hasUsedPreviousNames'])
}

const politicalContact = (props) => {
  return value(props.shouldContact) &&
    hasAnyAttributes(props, ['emailAddress', 'phoneNumber']);
}

const politicalPartyChoose = (props) => {
    return props && (
    value(props.politicalPartyChoose) && value(props.isSelected)
  );
}

const physicalTraits = (props) => {
  return hasAllAttributes(props, ['sex', 'eyeColor', 'hairColor']);
}

const application = (props) => {
  return legalName(props.legalName) ||
    date(props.dateOfBirth) ||
    address(props.homeAddress) ||
    address(props.mailingAddress) ||
    traitsHeightWeight(props.traitsHeightWeight) ||
    physicalTraits(props.physicalTraits) ||
    organDonation(props.organDonation) ||
    socialSecurity(props.socialSecurity) ||
    namesHistory(props.namesHistory) ||
    privilegeRemovedHistory(props.privilegeRemovedHistory) ||
    existingDLIDInfo(props.existingDLIDInfo) ||
    value(props.citizenStatus) ||
    value(props.ballotByMail) ||
    value(props.eligibilityRequirements) ||
    politicalPartyChoose(props.politicalPartyChoose) ||
    value(props.ballotLanguage) ||
    value(props.optOut) ||
    politicalContact(props.politicalContact);
};

export {
  value,
  legalName,
  address,
  date,
  traitsHeightWeight,
  physicalTraits,
  organDonation,
  socialSecurity,
  namesHistory,
  privilegeRemovedHistory,
  existingDLIDInfo,
  politicalPartyChoose,
  politicalContact,
  hasPreviousNames,
  application
};

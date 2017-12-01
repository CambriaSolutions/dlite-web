'use strict';

const parserHelper = require('../helpers/data-parser');
const defaultClientState = require('../helpers/client-default-state');

function parse(data) {

  if(!data) {
    return defaultClientState;
  }

  let application           = data.application;
  let addresses             = data.addresses;
  let emails                = data.emails;
  let phone_numbers         = data.phone_numbers;
  let organ_donations       = data.organ_donations;
  let card_histories        = data.card_histories;
  let previous_names        = data.previous_names;
  let medical_histories     = data.medical_histories;
  let license_issues        = data.license_issues;
  let veterans_info         = data.veterans_info;
  let voting_registrations  = data.voting_registrations;

  return Object.assign(
    {},
    {
      application: {
        id:                       application.id,
        legalName:                getLegalName(application),
        dateOfBirth:              getDateOfBirth(application),
        homeAddress:              getHomeAddress(addresses),
        mailingAddress:           getMailingAddress(addresses),
        physicalTraits:           getPhysicalTraits(application),
        traitsHeightWeight:       getHeightAndWeight(application),
        socialSecurity:           getSocialSecurity(application),
        organDonation:            getOrganDonations(organ_donations),
        licenseAndIdHistory:      getLicenseAndIdHistory(card_histories),
        namesHistory:             getNamesHistories(previous_names),
        medicalHistory:           getMedicalHistories(medical_histories),
        licenseIssues:            getLicenseIssues(license_issues),
        veteransService:          getVeteransService(veterans_info),
        citizenStatus:            getCitizenStatus(voting_registrations),
        ballotByMail:             getBallotByMail(voting_registrations),
        eligibilityRequirements:  getEligibility(voting_registrations),
        politicalPartyChoose:     getParty(voting_registrations),
        ballotLanguage:           getBallotLanguage(voting_registrations),
        optOut:                   getOptedOut(voting_registrations),
        contactMethods:           getContactMethods(emails, phone_numbers, voting_registrations)
      }
    }
  );
}

function getLegalName(application) {
  return {
    firstName:  application.first_name,
    middleName: application.middle_name,
    lastName:   application.last_name,
    suffix:     application.suffix_name
  };
}

function getDateOfBirth(application) {
  let data_of_birth = '';
  if(application.date_of_birth){
    data_of_birth = {
      day: (new Date(application.date_of_birth).getDate()).toString(),
      month: (new Date(application.date_of_birth).getMonth() + 1).toString(),
      year: (new Date(application.date_of_birth).getFullYear()).toString()
    }
  }
  return data_of_birth;

}

function getHomeAddress(addresses) {
  let home_address = {};
  addresses.forEach(function(address) {
    if(address.type === 'home'){
      home_address = address;
    }
  });
  return {
    street_1: home_address.street_address_1,
    street_2: home_address.street_address_2,
    city:     home_address.city,
    state:    home_address.state,
    zip:      home_address.zip
  };

}

function getMailingAddress(addresses) {
  let mailing_address = {};
  addresses.forEach(function(address) {
    if(address.type === 'mailing'){
      mailing_address = address;
    }
  });
  return {
    street_1: mailing_address.street_address_1,
    street_2: mailing_address.street_address_2,
    city:     mailing_address.city,
    state:    mailing_address.state,
    zip:      mailing_address.zip
  };
}

function getPhysicalTraits(application) {
  return {
    hairColor:    application.hair_color,
    eyeColor:     application.eye_color,
    sex:          application.sex
  };
}

function getHeightAndWeight(application) {
  return {
    weight:       application.weight + '',
    heightFeet:   application.height_feet + '',
    heightInches: application.height_inches + ''
  };
}

function getSocialSecurity(application) {
  let social_security = '';
  if(application.social_security_number) {
    let _parts = application.social_security_number.split('-');
    social_security = {
      part1:              _parts[0],
      part2:              _parts[1],
      part3:              _parts[2],
      hasSocialSecurity:  'Yes'
    }
  }
  return social_security;
}

function getOrganDonations(organ_donations) {
  return {
    donate: parserHelper.boolToStr(organ_donations.donating_organs),
    contribute: parserHelper.boolToStr(organ_donations.donating_money)
  };
}

function getLicenseAndIdHistory(card_histories) {
  if(card_histories && card_histories.length > 0){
    card_histories = card_histories[0];
    let _date = parserHelper.createDateJson(card_histories.date_description);
    return {
      DLIDNumber:   card_histories.number,
      issuedBy:     card_histories.issuing_entity,
      month:        _date.month,
      day:          _date.day,
      year:         _date.year,
      isIssued:     'Yes'
    };
  }
  else {
    return {
      DLIDNumber:   '',
      issuedBy:     '',
      month:        '',
      day:          '',
      year:         '',
      isIssued:     'No'
    };
  }
}

function getNamesHistories(previous_names) {
  if(previous_names && previous_names.length > 0){
    let _names = previous_names[0].name;
    for(var i = 1; i < previous_names.length; i++ ) {
      _names = _names + ', ' + previous_names[i].name;
    }
    return {
      hasUsedPreviousNames: 'Yes',
      previousNames:        _names
    };
  }
  else{
    return {
      hasUsedPreviousNames: 'No',
      previousNames:        ''
    };
  }
}

function getMedicalHistories(medical_histories) {
  if(medical_histories && medical_histories.length > 0){
    medical_histories = medical_histories[0];
    return {
      hasMedicalCondition:  'Yes',
      medicalInfo:          medical_histories.description
    };
  }
  else{
    return {
      hasMedicalCondition:  'No',
      medicalInfo:          ''
    };
  }
}

function getLicenseIssues(license_issues) {
  if(license_issues && license_issues.length > 0){
    license_issues = license_issues[0];
    let _date = parserHelper.createDateJson(license_issues.date_description);
    return {
      isSuspended:  'Yes',
      month:        _date.month,
      day:          _date.day,
      year:         _date.year,
      reason:       license_issues.description
    };
  }
  else{
    return {
      isSuspended:  'No',
      month:        '',
      day:          '',
      year:         '',
      reason:       ''
    };
  }
}

function getVeteransService(veterans_info) {
  if(veterans_info){
    let label = 'No';
    if(veterans_info.labeling === 'add'){
      label = 'Yes';
    }
    return {
      isVeteran:            'Yes',
      receiveBenefits:      parserHelper.boolToStr(veterans_info.has_requested_information),
      veteransIdentifier:   label
    };
  }
  else{
    return {
      isVeteran:            'No',
      receiveBenefits:      '',
      veteransIdentifier:   ''
    };
  }
}

function getCitizenStatus(voting_registrations) {
  return parserHelper.boolToStr(voting_registrations.is_citizen);
}

function getBallotByMail(voting_registrations) {
  return parserHelper.boolToStr(voting_registrations.vote_by_mail);
}

function getEligibility(voting_registrations) {
  return parserHelper.boolToStr(voting_registrations.is_eligible);
}

function getParty(voting_registrations) {
  return {
    isSelected:             parserHelper.boolToStr(voting_registrations.is_preregistering),
    politicalPartyChoose:   voting_registrations.party
  };
}

function getBallotLanguage(voting_registrations) {
  return voting_registrations.language;
}

function getOptedOut(voting_registrations) {
  let optOut      = '';
  let _opted_out  = parserHelper.boolToStr(voting_registrations.opted_out);
  let _type       = voting_registrations.type;
  return parserHelper.optedValuesToStr({
    opted_out: _opted_out,
    type: _type
  });
}

function getContactMethods(emails, phone_numbers, voting_registrations) {
  emails          = emails[0];
  phone_numbers   = phone_numbers[0];
  return {
    shouldContact: parserHelper.boolToStr(voting_registrations.should_contact),
    emailAddress: emails.address,
    phoneNumber: phone_numbers.number
  };
}

module.exports = parse;

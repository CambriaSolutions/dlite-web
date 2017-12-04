'use strict';

const assert             = require('assert');

const env                = require('../../support/env');
const dataHelper         = require('../../support/data-helper');
const parse              = require('../../../server/models/client-data-parser');
const parserHelper       = require('../../../server/helpers/data-parser');

describe('client data parser', function() {
  let data, parsedData;

  beforeEach(function() {
    data = dataHelper.fakeClientData();
    parsedData = parse(data);
  });

  it('correctly extracts the application table data', function() {
    let applicationData = parsedData.application;
    let dob = new Date(parserHelper.createDateString(data.dateOfBirth));
    let social = data.socialSecurity.part1+'-'+data.socialSecurity.part2+'-'+data.socialSecurity.part3
    assert.equal(applicationData.id, data.id);
    assert.equal(applicationData.first_name, data.legalName.firstName);
    assert.equal(applicationData.middle_name, data.legalName.middleName);
    assert.equal(applicationData.last_name, data.legalName.lastName);
    assert.equal(applicationData.suffix_name, data.legalName.suffix);
    assert.equal(applicationData.date_of_birth.toString(), dob.toString());
    assert.equal(applicationData.hair_color, data.physicalTraits.hairColor);
    assert.equal(applicationData.eye_color, data.physicalTraits.eyeColor);
    assert.equal(applicationData.sex, data.physicalTraits.sex);
    assert.equal(applicationData.height_feet, data.traitsHeightWeight.heightFeet);
    assert.equal(applicationData.height_inches, data.traitsHeightWeight.heightInches);
    assert.equal(applicationData.weight, data.traitsHeightWeight.weight);
    assert.equal(applicationData.social_security_number, social);
  });

  it('correctly extracts the addresses', function() {
    let addresses = parsedData.addresses;

    let address = addresses[0];
    assert.equal(address.application_id, data.id);
    assert.equal(address.type, 'mailing');
    assert.equal(address.street_address_1,  data.mailingAddress.street_1);
    assert.equal(address.street_address_2,  data.mailingAddress.street_2);
    assert.equal(address.city,              data.mailingAddress.city);
    assert.equal(address.state,             data.mailingAddress.state);
    assert.equal(address.zip,               data.mailingAddress.zip);

    address = addresses[1];
    assert.equal(address.application_id, data.id);
    assert.equal(address.type, 'home');
    assert.equal(address.street_address_1,  data.homeAddress.street_1);
    assert.equal(address.street_address_2,  data.homeAddress.street_2);
    assert.equal(address.city,              data.homeAddress.city);
    assert.equal(address.state,             data.homeAddress.state);
    assert.equal(address.zip,               data.homeAddress.zip);
  });

  it('correctly extracts the email', function() {
    let email = parsedData.emails[0];
    assert.equal(email.application_id, data.id);
    assert.equal(email.address, data.contactMethods.emailAddress);
  });

  it('correctly extracts the phone number', function() {
    let phoneNumber = parsedData.phone_numbers[0];
    assert.equal(phoneNumber.application_id, data.id);
    assert.equal(phoneNumber.number, data.contactMethods.phoneNumber);
  });

  it('correctly extracts the organ donations', function() {
    let organDonations = parsedData.organ_donations[0];
    assert.equal(organDonations.application_id, data.id);
    assert.equal(organDonations.donating_organs, parserHelper.strToBool(data.organDonation.donate));
    assert.equal(organDonations.donating_money, parserHelper.strToBool(data.organDonation.contribute));
  });

  it('correctly extracts the card histories', function() {
    let cardHistories = parsedData.card_histories[0];
    let _date = parserHelper.createDateString(data.licenseAndIdHistory);
    assert.equal(cardHistories.application_id, data.id);
    assert.equal(cardHistories.number, data.licenseAndIdHistory.DLIDNumber);
    assert.equal(cardHistories.issuing_entity, data.licenseAndIdHistory.issuedBy);
    assert.equal(cardHistories.date_description, _date);
  });

  it('correctly extracts the names history', function() {
    let namesHistory = parsedData.previous_names;
    let _names = data.namesHistory.previousNames.split(',');
    assert.equal(namesHistory[0].application_id, data.id);
    assert.equal(namesHistory[1].application_id, data.id);
    assert.equal(namesHistory[2].application_id, data.id);
    assert.equal(namesHistory[0].name, _names[0].trim());
    assert.equal(namesHistory[1].name, _names[1].trim());
    assert.equal(namesHistory[2].name, _names[2].trim());
  });

  it('correctly extracts the medical history', function() {
    let medicalHistory = parsedData.medical_histories[0];
    assert.equal(medicalHistory.application_id, data.id);
    assert.equal(medicalHistory.description, data.medicalHistory.medicalInfo);
  });

  it('correctly extracts the license issues', function() {
    let licenseIssues = parsedData.license_issues[0];
    let _date = parserHelper.createDateString(data.licenseIssues);
    assert.equal(licenseIssues.application_id, data.id);
    assert.equal(licenseIssues.description, data.licenseIssues.reason);
    assert.equal(licenseIssues.date_description, _date);
  });

  it('correctly extracts the veterans info', function() {
    let veteransInfo = parsedData.veterans_info[0];
    let _label = null;
    if(data.veteransService.veteransIdentifier === 'Yes'){
      _label = 'add';
    }
    assert.equal(veteransInfo.application_id, data.id);
    assert.equal(veteransInfo.has_requested_information, parserHelper.strToBool(data.veteransService.receiveBenefits));
    assert.equal(veteransInfo.labeling, _label);
  });

  it('correctly extracts the voting registrations', function() {
    let votingReg = parsedData.voting_registrations[0];
    assert.equal(votingReg.application_id, data.id);
    assert.equal(votingReg.is_citizen, parserHelper.strToBool(data.citizenStatus));
    assert.equal(votingReg.is_eligible, parserHelper.strToBool(data.eligibilityRequirements));
    assert.equal(votingReg.type, parserHelper.optedStrToValues(data.optOut).type);
    assert.equal(votingReg.opted_out, parserHelper.strToBool(parserHelper.optedStrToValues(data.optOut).opted_out));
    assert.equal(votingReg.is_preregistering, parserHelper.strToBool(data.politicalPartyChoose.isSelected));
    assert.equal(votingReg.party, data.politicalPartyChoose.politicalPartyChoose);
    assert.equal(votingReg.language, data.ballotLanguage);
    assert.equal(votingReg.vote_by_mail, parserHelper.strToBool(data.ballotByMail));
    assert.equal(votingReg.should_contact, parserHelper.strToBool(data.contactMethods.shouldContact));
  });
});

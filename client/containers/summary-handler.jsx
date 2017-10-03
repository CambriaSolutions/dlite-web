'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';

import HomeLink from '../presentations/home-link.jsx';
import alicePath  from '../helpers/alice-path';

import {
  SummaryContactDetails,
} from '../presentations/summary-view.jsx';

import {
  LegalName,
  DateOfBirth,
  HomeAddress,
  MailingAddress,
  Sex,
  EyeColor,
  HairColor,
  Height,
  Weight,
  SocialSecurity,
  CitizenStatus,
  ContactMethods,
  BallotByMail,
  EligibilityRequirements,
  PoliticalPartyChoose,
  BallotLanguage,
  ContinueButton,
  Empty
} from '../presentations/summary/index.js';

import * as dataPresent from '../helpers/data-present';

// Not sure what is going to happen with this, since it seems to
// be moving to the SOS only area ... holding on refactoring until then.
const hasContactDetailsEntered = (props) => {
  return props.emailAddress || props.phoneNumber;
};
const successVisit = '/about-me/success-visit';



const SummaryHandler = (props) => {
  let contents = [
    <LegalName legalName={props.legalName} key='legal-name' />,
    <DateOfBirth dateOfBirth={props.dateOfBirth} key='date-of-birth' />,
    <HomeAddress homeAddress={props.homeAddress} key='home-address' />,
    <MailingAddress mailingAddress={props.mailingAddress} key='mailing-address' />,
    <Sex sex={props.sex} key='sex' />,
    <EyeColor eyeColor={props.eyeColor.eyeColor} key='eye-color' />,
    <HairColor hairColor={props.hairColor.hairColor} key='hair-color' />,
    <Height height={props.height} key='height' />,
    <Weight weight={props.weight} key='weight' />,
    <SocialSecurity socialSecurity={props.socialSecurity} key='social-security' />,
    <CitizenStatus citizenStatus={props.citizenStatus} key='citizen-status' />,
    <ContactMethods contactMethods={props.contactMethods} key='contact-methods' />,
    <BallotByMail ballotByMail={props.ballotByMail} key='ballot-by-mail' />,
    <EligibilityRequirements eligibilityRequirements={props.eligibilityRequirements} key='eligibility-requirements' />,
    <PoliticalPartyChoose politicalPartyChoose={props.politicalPartyChoose} key='political-party-choose' />,
    <BallotLanguage ballotLanguage={props.ballotLanguage} key='ballot-language' />,
    <Empty {...props} key='empty' />,
    <a href={alicePath(successVisit)} key="link-to-success-visit">
      <ContinueButton disabled={props.continueDisabled} key="submit"/>
    </a>
  ];

  if (hasContactDetailsEntered(props.contactDetails)) {
    contents.push(<SummaryContactDetails contactDetails={props.contactDetails} key='contactDetails'/>);
  }

  contents = contents.reduce((summaries, item) => {
    if (item.type) { summaries.push(item); }
    return summaries;
  }, []);


  return (
    <div className='summary'>
      <HomeLink />
      { contents }
    </div>
  );
}

function mapStateToProps(state) {
  return state.application;
}

export default connect(mapStateToProps)(SummaryHandler);

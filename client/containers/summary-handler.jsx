'use strict';

import React, {Component}         from 'react';
import { connect }                from 'react-redux';
import { Link }                   from 'react-router-dom';

import HomeLink                   from '../presentations/home-link.jsx';
import alicePath                  from '../helpers/alice-path';

import {
  LegalName,
  DateOfBirth,
  HomeAddress,
  MailingAddress,
  TraitsHeightWeight,
  PhysicalTraits,
  OrganDonation,
  SocialSecurity,
  PrivilegeRemovedHistory,
  DlidHistory,
  NamesHistory,
  CitizenStatus,
  BallotByMail,
  EligibilityRequirements,
  PoliticalPartyChoose,
  BallotLanguage,
  PoliticalContact,
  ContinueButton,
  OptOut,
  Empty
} from '../presentations/summary/index.js';

const successVisit = '/about-me/success-visit';

const SummaryHandler = (props) => {
  let contents = [
    <LegalName legalName={props.legalName} key='legal-name' />,
    <DateOfBirth dateOfBirth={props.dateOfBirth} key='date-of-birth' />,
    <HomeAddress homeAddress={props.homeAddress} key='home-address' />,
    <MailingAddress mailingAddress={props.mailingAddress} key='mailing-address' />,
    <TraitsHeightWeight traitsHeightWeight={props.traitsHeightWeight} key='traits-height-weight' />,
    <PhysicalTraits physicalTraits={props.physicalTraits} key='physicalTraits' />,
    <OrganDonation organDonation={props.organDonation} key='organ-donation' />,
    <SocialSecurity socialSecurity={props.socialSecurity} key='social-security' />,
    <PrivilegeRemovedHistory privilegeRemovedHistory={props.privilegeRemovedHistory} key='privilege-removed-history' />,
    <DlidHistory dlidHistory={props.dlidHistory} key='existing-dl-id-info' />,
    <NamesHistory namesHistory={props.namesHistory} key='names-history' />,
    <CitizenStatus citizenStatus={props.citizenStatus} key='citizen-status' />,
    <BallotByMail ballotByMail={props.ballotByMail} key='ballot-by-mail' />,
    <EligibilityRequirements eligibilityRequirements={props.eligibilityRequirements} key='eligibility-requirements' />,
    <PoliticalPartyChoose politicalPartyChoose={props.politicalPartyChoose} key='choose-party' />,
    <BallotLanguage ballotLanguage={props.ballotLanguage} key='ballot-language' />,
    <PoliticalContact politicalContact={props.politicalContact} key='political-contact' />,
    <OptOut optOut={props.optOut} key='opt-out' />,
    <Empty {...props} key='empty' />,

    <Link to={ alicePath(successVisit) } key="link-to-success-visit" >
      <ContinueButton disabled={props.continueDisabled} key="submit"/>
    </Link>

  ];

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

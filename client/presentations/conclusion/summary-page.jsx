'use strict'

import React                from 'react'
import Accordion            from '../../containers/accordion.jsx';
import Page                 from '../../containers/page.jsx';
import { ageChecks }        from '../../helpers/calculate-age';
import {
  getID,
  getDL
} from '../../helpers/data/card-type';
import {
  LegalName,
  DateOfBirth,
  SeniorID,
  IDRealID,
  DLRealID,
  LicenseType,
  ReducedOrNoFee,
  Address,
  TraitsHeightWeight,
  PhysicalTraits,
  OrganDonation,
  SocialSecurity,
  LicenseIssues,
  LicenseAndIdHistory,
  NamesHistory,
  MedicalHistory,
  VeteransService,
  CitizenStatus,
  BallotByMail,
  EligibilityRequirements,
  PoliticalPartyChoose,
  BallotLanguage,
  ContactMethods,
  ContinueButton,
  GuardianSignature,
  OptOut,
  Empty,
  IDApplicationNotStarted,
  DLApplicationNotStarted,
  IDAction,
  DLAction,
  CurrentIDInfo,
  CurrentDLInfo
} from './summary/index.js';
import {
  ErrorMessageBox
} from '../validations.jsx';

const header = {
  question: 'Please take a minute to review your answers'
}
const DLAlert = () => {
  return <h4 className='youth-license-notification'>
    If you go to the DMV office to finish your license application before you are 15.5 years old, you can only get a Junior permit. These permits are issued only in exceptional circumstances.
  </h4>
};

const IDAlert = (props) => {
  if(!getID(props)) { return null; }
  return (
    <h4 className='youth-license-notification'>
      You are eligible to complete your ID application in the office today.
    </h4>
  )
};

const Alerts = (props) => {
  if(!getDL(props) || ageChecks.GreaterThanEqual15Half(props.dateOfBirth)){ return null; }
  return (
    <div>
      <DLAlert/>
      <IDAlert
        cardType = {props.cardType}
      />
    </div>
  );
};

const ButtonComponent = (props) => {
  if(APP_ENV && (APP_ENV === 'development' || APP_ENV === 'test')){
    return (
        <div className='navigation-buttons row' key='save-and-continue'>
          <button type='submit' className='arrow-button forward'>
            Save & Continue
          </button>
        </div>
    );
  }

  return (
      <ContinueButton disabled={props.continueDisabled} key="submit"/>
  );
};


const SummaryPage = (props) => {
  let application = props.application;

  let contents = [

    <Accordion id='id-application-details-summary' title='My ID' key='id-application-details-summary'>
      <IDApplicationNotStarted {...application} key='id-application-not-started' />
      <IDAction {...application} />
      <ReducedOrNoFee {...application} />
      <SeniorID seniorID={application.seniorID} />
      <CurrentIDInfo {...application} />
      <IDRealID {...application} />
    </Accordion>,

    <Accordion id='driver-license-application-details-summary' title='My Driver License' key='driver-license-application-details-summary'>
      <DLApplicationNotStarted {...application} key='dl-application-not-started' />
      <DLAction {...application} />
      <CurrentDLInfo {...application} />
      <DLRealID {...application} />
      <LicenseType {...application} />
    </Accordion>,

    <Accordion id='basics-summary' title='My basics' key='basics-summary'>
      <Empty {...application} key='empty' />
      <LegalName legalName={application.legalName} />
      <DateOfBirth dateOfBirth={application.dateOfBirth} />
      <Address address={application.address} />
      <PhysicalTraits physicalTraits={application.physicalTraits} />
      <TraitsHeightWeight traitsHeightWeight={application.traitsHeightWeight} />
      <SocialSecurity socialSecurity={application.socialSecurity} />
    </Accordion>,

    <Accordion id='history-summary' title='My history' key='history-summary'>
      <MedicalHistory medicalHistory={application.medicalHistory} cardType={application.cardType} />
      <LicenseAndIdHistory licenseAndIdHistory={application.licenseAndIdHistory} />
      <NamesHistory namesHistory={application.namesHistory} />
      <LicenseIssues licenseIssues={application.licenseIssues} />
      <VeteransService veteransService={application.veteransService} />
    </Accordion>,

    <Accordion id='organ-donation-summary' title='Organ donation' key='organ-donation-summary'>
      <OrganDonation organDonation={application.organDonation} />
    </Accordion>,

    <Accordion id='voter-registration-summary' title='Voter registration' key='voter-registration-summary'>
      <CitizenStatus citizenStatus={application.citizenStatus} />
      <EligibilityRequirements eligibilityRequirements={application.eligibilityRequirements} />
      <OptOut optOut={application.optOut} />
      <PoliticalPartyChoose politicalPartyChoose={application.politicalPartyChoose} />
      <BallotLanguage ballotLanguage={application.language.ballotLanguage} />
      <BallotByMail ballotByMail={application.ballotByMail} />
      <ContactMethods contactMethods={application.contactMethods} />
    </Accordion>
  ];

  contents = contents.reduce((summaries, item) => {
    if (item.type) { summaries.push(item); }
    return summaries;
  }, []);

  let showOrHide = props.server.apiStatus === 'loading' ? 'hide' : '';

  return (
      <Page
        {...props}
        sectionKey='summary'
      >
        <div className={props.server.apiStatus}/>
        <form onSubmit  = { props.onSubmit } className={showOrHide}>
          <h2 className='question'>{header.question}</h2>

          <ErrorMessageBox
            errorMessage={props.server.apiStatus === 'error' ? 'Sorry, something went wrong' : '' }
          />
          <div className= 'summary'>
            <Alerts
              cardType    = {application.cardType}
              dateOfBirth = {application.dateOfBirth}
            />
            {contents}
            <ButtonComponent
              continueDisabled = { props.continueDisabled }
            />
          </div>
        </form>
      </Page>
  )
};

export default SummaryPage;

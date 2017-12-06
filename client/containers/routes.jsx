'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';

import alicePath                              from '../helpers/alice-path';
import Home                                   from '../presentations/home.jsx';
import Summary                                from './summary-handler.jsx';
import RequiredDocuments                      from './required-documents-handler.jsx';

import Intro                                  from '../presentations/apply/intro.jsx';
import LegalName                              from './apply/legal-name-form-container.jsx';
import WhatDoYouWantToDoToday                 from './apply/what-do-you-want-to-do-today-container.jsx';
import DateOfBirth                            from './apply/date-of-birth-form-container.jsx';
import RealID                                 from './apply/real-id-container.jsx';
import Address                                from './apply/address-form-container.jsx';
import TraitsHeightWeight                     from './apply/traits-height-weight-form-container.jsx';
import PhysicalTraits                         from './apply/physical-traits-form-container.jsx';
import SocialSecurity                         from './apply/social-security-form-container.jsx';
import VoterIntro                             from '../presentations/voter/introduction.jsx';
import OrganDonation                          from './apply/organ-donation-form-container.jsx';
import LicenseIssues                          from './apply/license-issues-form-container.jsx';
import LicenseAndId                           from './apply/license-and-id-history-form-container.jsx';
import MedicalHistory                         from './apply/medical-history-form-container.jsx';
import NamesHistory                           from './apply/names-history-form-container.jsx';
import VeteransService                        from './apply/veterans-service-form-container.jsx';
import VoterCitizenStatus                     from './voter/citizen-status-form-container.jsx';
import EligibilityRequirements                from './voter/eligibility-requirements-form-container.jsx';
import OptOut                                 from './voter/opt-out-form-container.jsx';
import VoterPreferencesIntro                  from '../presentations/voter/voter-preferences-intro-form.jsx';
import VoterPreferencesIntroUpdated           from '../presentations/voter/voter-preferences-intro-updated-form.jsx';
import PoliticalPartyChoose                   from './voter/choose-party-form-container.jsx';
import BallotLanguage                         from './voter/ballot-language-form-container.jsx';
import BallotByMail                           from './voter/ballot-by-mail-form-container.jsx';
import AppointmentPreparation                 from '../presentations/appointment-preparation-info.jsx';
import ContactMethods                         from './voter/contact-methods-form-container.jsx';
import VoterRegComplete                       from '../presentations/voter/voter-confirmation.jsx';

class Router extends React.Component {
  render() {
    return (
      <div className='routes'>
        <Route path={ alicePath('/') } exact component={LegalName} />
        <Route path={ alicePath('/my-basics/legal-name') } component={LegalName} />
        <Route path={ alicePath('/my-basics/date-of-birth') } component={DateOfBirth} />
        <Route path={ alicePath('/what-do-you-want-to-do-today') } component={WhatDoYouWantToDoToday} />
        <Route path={ alicePath('/real-id') } component={RealID} />
        <Route path={ alicePath('/get-started') } component={Intro} />
        <Route path={ alicePath('/links') } exact component={Home} />
        <Route path={ alicePath('/summary') } component={Summary} />
        <Route path={ alicePath('/my-basics/address') } component={Address} />
        <Route path={ alicePath('/my-basics/traits-height-weight' ) } component={TraitsHeightWeight} />
        <Route path={ alicePath('/my-basics/physical-traits') } component={PhysicalTraits} />
        <Route path={ alicePath('/my-basics/social-security' ) } component={SocialSecurity} />
        <Route path={ alicePath('/organ-donation' ) } component={OrganDonation} />
        <Route path={ alicePath('/my-history/license-issues')} component={LicenseIssues} />
        <Route path={ alicePath('/my-history/license-and-id')} component={LicenseAndId} />
        <Route path={ alicePath('/my-history/medical' ) } component={MedicalHistory} />
        <Route path={ alicePath('/my-history/names' ) } component={NamesHistory} />
        <Route path={ alicePath('/my-history/veterans-service') } component={VeteransService} />

        <Route path={ alicePath('/voting-registration/introduction') } component={VoterIntro} />
        <Route path={ alicePath('/voting-registration/citizenship') } component={VoterCitizenStatus} />
        <Route path={ alicePath('/voting-registration/eligibility') } component={EligibilityRequirements} />
        <Route path={ alicePath('/voting-registration/opt-out') } component={OptOut} />
        <Route path={ alicePath('/voting-registration/preferences') } component={VoterPreferencesIntro} />
        <Route path={ alicePath('/voting-registration/updating-preferences') } component={VoterPreferencesIntroUpdated} />
        <Route path={ alicePath('/voting-registration/choose-party') } component={PoliticalPartyChoose} />
        <Route path={ alicePath('/voting-registration/language') } component={BallotLanguage} />
        <Route path={ alicePath('/voting-registration/vote-by-mail') } component={BallotByMail} />
        <Route path={ alicePath('/voting-registration/contact-methods') } component={ContactMethods} />
        <Route path={ alicePath('/voting-registration/confirmation') } component={VoterRegComplete} />

        <Route exact path={ alicePath('/appointment-preparation/') } component={AppointmentPreparation} />
        <Route path={ alicePath('/appointment-preparation/documents') } component={RequiredDocuments} />
      </div>
    );
  }
}

export default Router;

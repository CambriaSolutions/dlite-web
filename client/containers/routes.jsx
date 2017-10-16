'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';

import alicePath                              from '../helpers/alice-path';
import Home                                   from '../presentations/home.jsx';
import Summary                                from './summary-handler.jsx';


import Intro                                  from '../presentations/apply/intro.jsx';
import LegalName                              from './apply/legal-name-form-container.jsx';
import DateOfBirth                            from './apply/date-of-birth-form-container.jsx';
import HomeAddress                            from './apply/home-address-form-container.jsx';
import InterstitialAddress                    from './apply/interstitial-address-container.jsx';
import MailingAddress                         from './apply/mailing-address-form-container.jsx';
import Sex                                    from './apply/sex-selector-form-container.jsx';
import EyeColor                               from './apply/eye-color-form-container.jsx';
import HairColor                              from './apply/hair-color-form-container.jsx';
import Height                                 from './apply/height-form-container.jsx';
import Weight                                 from './apply/weight-form-container.jsx';
import SocialSecurity                         from './apply/social-security-form-container.jsx';
import VoterIntro                             from '../presentations/voter/voter-intro-info.jsx';
import Organ                                  from './apply/organ-form-container.jsx';
import DonateContribution                     from './apply/donate-contribution-form-container.jsx';
import SuspendedLicenseInfo                   from './apply/suspended-license-info-form-container.jsx';

import VoterCitizenStatus                     from './voter/citizen-status-form-container.jsx';
import EligibilityRequirements                from './voter/eligibility-requirements-form-container.jsx';
import OptOut                                 from './voter/opt-out-form-container.jsx';
import VoterPreferencesIntro                  from '../presentations/voter/voter-preferences-intro-form.jsx';
import VoterPreferencesIntroPreregistered     from '../presentations/voter/voter-preferences-intro-preregistered-form.jsx';
import PoliticalPartyChoose                   from './voter/political-party-choose-form-container.jsx';
import PoliticalPartyPreference               from './voter/political-party-preference-form-container.jsx';
import BallotLanguage                         from './voter/ballot-language-form-container.jsx';
import BallotByMail                           from './voter/ballot-by-mail-form-container.jsx';
import ContactChoice                          from './voter/contact-choice-form-container.jsx';
import ContactDetails                         from './voter/contact-details-form-container.jsx';
import VoterRegComplete                       from '../presentations/voter/voter-reg-complete-info.jsx';
import SuccessVisit                           from '../presentations/success-visit-info.jsx';


class Router extends React.Component {
  render() {
    return (
      <div className='routes'>
        <Route path={ alicePath('/') } exact component={Intro} />
        <Route path={ alicePath('/what-do-you-want-to-do-today') } component={Intro} />
        <Route path={ alicePath('/links') } exact component={Home} />
        <Route path={ alicePath('/summary') } component={Summary} />
        <Route path={ alicePath('/about-me/legal-name') } component={LegalName} />
        <Route path={ alicePath('/about-me/date-of-birth') } component={DateOfBirth} />
        <Route path={ alicePath('/about-me/home-address') } component={HomeAddress} />
        <Route path={ alicePath('/about-me/is-mailing-same/') } component={InterstitialAddress} />
        <Route path={ alicePath('/about-me/mailing-address') } component={MailingAddress} />
        <Route path={ alicePath('/about-me/sex') } component={Sex} />
        <Route path={ alicePath('/about-me/appearance/eye') } component={EyeColor} />
        <Route path={ alicePath('/about-me/appearance/hair' ) } component={HairColor} />
        <Route path={ alicePath('/about-me/height' ) } component={Height} />
        <Route path={ alicePath('/about-me/weight' ) } component={Weight} />
        <Route path={ alicePath('/about-me/social-security' ) } component={SocialSecurity} />
        <Route path={ alicePath('/about-me/organ' ) } component={Organ} />
        <Route path={ alicePath('/about-me/donate-contribution' ) } component={DonateContribution} />
        <Route path={ alicePath('/about-me/enter-revoked-suspended' ) } component={SuspendedLicenseInfo} />

        <Route path={ alicePath('/voter/voter-introduction') } component={VoterIntro} />
        <Route path={ alicePath('/about-me/voter/am-citizen') } component={VoterCitizenStatus} />
        <Route path={ alicePath('/about-me/voter/eligibility-requirements') } component={EligibilityRequirements} />
        <Route path={ alicePath('/about-me/voter/opt-out') } component={OptOut} />
        <Route path={ alicePath('/about-me/voter/voter-preferences-intro') } component={VoterPreferencesIntro} />
        <Route path={ alicePath('/about-me/voter/voter-preferences-intro-preregistered') } component={VoterPreferencesIntroPreregistered} />
        <Route path={ alicePath('/about-me/voter/political-party-choose') } component={PoliticalPartyChoose} />
        <Route path={ alicePath('/about-me/voter/political-party') } component={PoliticalPartyPreference} />
        <Route path={ alicePath('/about-me/voter/ballot-language') } component={BallotLanguage} />
        <Route path={ alicePath('/about-me/voter/ballot-by-mail') } component={BallotByMail} />
        <Route path={ alicePath('/about-me/voter/contact-choice/') } component={ContactChoice} />
        <Route path={ alicePath('/about-me/voter/email-phone') } component={ContactDetails} />
        <Route path={ alicePath('/about-me/voter/voter-reg-complete/') } component={VoterRegComplete} />
        <Route path={ alicePath('/about-me/success-visit') } component={SuccessVisit} />
      </div>
    );
  }
}

export default Router;

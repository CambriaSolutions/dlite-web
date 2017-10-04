'use strict';

import React                        from 'react';
import { Route }                    from 'react-router-dom';

import Home                         from '../presentations/home.jsx';
import Summary                      from './summary-handler.jsx';
import alicePath                    from '../helpers/alice-path';

import LegalName                    from './legal-name-form-container.jsx';
import DateOfBirth                  from './date-of-birth-form-container.jsx';
import HomeAddress                  from './home-address-form-container.jsx';
import MailingAddress               from './mailing-address-form-container.jsx';
import Sex                          from './sex-selector-form-container.jsx';
import HairColor                    from './hair-color-form-container.jsx';
import EyeColor                     from './eye-color-form-container.jsx';
import Height                       from './height-form-container.jsx';
import Weight                       from './weight-form-container.jsx';
import Organ                        from './organ-form-container.jsx';
import SocialSecurity               from './social-security-form-container.jsx';
import InterstitialAddress          from './interstitial-address-container.jsx';
import VoterCitizenStatus           from './voter/citizen-status-form-container.jsx';
import BallotByMail                 from './voter/ballot-by-mail-form-container.jsx';
import EligibilityRequirements      from './voter/eligibility-requirements-form-container.jsx';
import BallotLanguage               from './voter/ballot-language-form-container.jsx';
import ContactChoice                from '../presentations/voter/contact-choice-form.jsx';
import VoterPreferencesIntro        from '../presentations/voter/voter-preferences-intro-form.jsx';
import OptOut                       from '../presentations/voter/opt-out-form.jsx';
import PoliticalParty               from '../presentations/voter/political-party-form.jsx';
import PoliticalPartyChoose         from './voter/political-party-choose-form-container.jsx';
import ContactDetails               from './voter/contact-details-form-container.jsx';
import ContactMethods               from './voter/contact-methods-form-container.jsx';
import EmailPhone                   from '../presentations/voter/email-phone-form.jsx';
import EmailPhoneRemove             from '../presentations/voter/email-phone-remove-form.jsx';
import SuccessVisit                 from '../presentations/success-visit-info.jsx';

class Router extends React.Component {
  render() {
    return (
      <div className='routes'>
        <Route path={ alicePath('/') } exact component={Home} />
        <Route path={ alicePath('/summary') } component={Summary} />

        <Route path={ alicePath('/about-me/legal-name') } component={LegalName} />
        <Route path={ alicePath('/about-me/date-of-birth') } component={DateOfBirth} />
        <Route path={ alicePath('/about-me/home-address') } component={HomeAddress} />
        <Route path={ alicePath('/about-me/mailing-address') } component={MailingAddress} />
        <Route path={ alicePath('/about-me/is-mailing-same/') } component={InterstitialAddress} />
        <Route path={ alicePath('/about-me/sex') } component={Sex} />
        <Route path={ alicePath('/about-me/appearance/eye') } component={EyeColor} />
        <Route path={ alicePath('/about-me/appearance/hair' ) } component={HairColor} />
        <Route path={ alicePath('/about-me/height' ) } component={Height} />
        <Route path={ alicePath('/about-me/weight' ) } component={Weight} />
        <Route path={ alicePath('/about-me/organ' ) } component={Organ} />
        <Route path={ alicePath('/about-me/social-security' ) } component={SocialSecurity} />
        <Route path={ alicePath('/about-me/voter/am-citizen') } component={VoterCitizenStatus} />
        <Route path={ alicePath('/about-me/voter/ballot-by-mail') } component={BallotByMail} />
        <Route path={ alicePath('/about-me/voter/eligibility-requirements') } component={EligibilityRequirements} />
        <Route path={ alicePath('/about-me/voter/ballot-language') } component={BallotLanguage} />
        <Route path={ alicePath('/about-me/voter/contact-choice') } component={ContactChoice} />
        <Route path={ alicePath('/about-me/voter/voter-preferences-intro') } component={VoterPreferencesIntro} />
        <Route path={ alicePath('/about-me/voter/opt-out') } component={OptOut} />
        <Route path={ alicePath('/about-me/voter/political-party') } component={PoliticalParty} />
        <Route path={ alicePath('/about-me/voter/political-party-choose') } component={PoliticalPartyChoose} />
        <Route path={ alicePath('/about-me/voter/email-phone') } component={ContactDetails} />
        <Route path={ alicePath('/about-me/voter/contact-choice/') } component={ContactMethods} />
        <Route path={ alicePath('/about-me/voter/email-phone/') } component={EmailPhone} />
        <Route path={ alicePath('/about-me/voter/remove-email-phone/') } component={EmailPhoneRemove} />
        <Route path={ alicePath('/about-me/success-visit') } component={SuccessVisit} />
      </div>
    );
  }
}

export default Router;

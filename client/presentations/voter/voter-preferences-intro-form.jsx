'use strict';

import React            from 'react';

import HomeLink         from '../home-link.jsx';
import LinkButton       from '../link-button.jsx';
import Page             from '../page.jsx';
import alicePath        from '../../helpers/alice-path';

const VoterPreferencesIntro = (props) => {
  const linkAddress = '/voting-registration/choose-party';
  const linkBack =  '/voting-registration/opt-out';
  let pageTitle  = 'DMV: License application - Voting registration'

  return (
    <Page
      sectionNumber='3'
      sectionName='Voting registration'
      {...props}
    >
      <div>
        <div className='voter-preferences-intro'>
          <h4>Next you will choose your voter preferences.</h4>

          <h4>Political Party</h4>
          <p>Choose your political party preferences.</p>

          <h4>Vote by mail</h4>
          <p>You can get your ballot in the mail for all future elections, meaning you don't have to go to a polling place to vote.</p>

          <h4>Language</h4>
          <p>Choose what language you would like to get your election guide in.</p>

          <h4>Contact Information</h4>
          <p>Election officials can contact you with election and voting information.</p>


          <LinkButton
            to={linkBack}
            className='back'
            linkText='Back' />

          <div className='unit spacer' />

          <LinkButton
            to={linkAddress}
            className='continue'
            linkText='Continue' />
        </div>
      </div>
    </Page>
  );
};

export default VoterPreferencesIntro;

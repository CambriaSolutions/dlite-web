'use strict';

import React from 'react';

import NavigationButtons      from '../../navigation-buttons.jsx';
import Page                   from '../../../containers/page.jsx';

const VoterPreferencesIntroUpdated = (props) => {
  return (
     <Page
      {...props}
      sectionKey='voterRegistration'
    >
      <form onSubmit={props.onSubmit}>
        <div className='updating-voter-preferences'>
          <h4>Next we'd like to make sure your voter registration is up to date.</h4>
          <p>This will replace your previous voter preferences.</p>
          <h4>Political Party</h4>
          <p>Choose your political party preference.</p>
          <h4>Vote by mail</h4>
          <p>You can get your ballot in the mail for all future elections, meaning you don't
          have to go to a polling place to vote.</p>
          <h4>Language</h4>
          <p>Choose what language you would like to get your election guide in.</p>
          <h4>Contact Information</h4>
          <p>Election officials can contact you with election and voting information.</p>

         <NavigationButtons { ...props } />
        </div>
      </form>
    </Page>
  );
};

export default VoterPreferencesIntroUpdated;

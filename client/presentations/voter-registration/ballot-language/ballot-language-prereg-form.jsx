'use strict';

import React from 'react';

import SelectorCollection from '../../selector-collection.jsx';
import Page               from '../../../containers/page.jsx';
import NavigationButtons  from '../../navigation-buttons.jsx';

const VALUES = ['English', 'Chinese', 'Japanese', 'Spanish', 'Thai', 'Korean', 'Tagalog', 'Hindi', 'Khmer', 'Vietnamese'];

const BallotLanguageFormPreReg = (props) => {

  return (
     <Page
      {...props}
      sectionKey='voterPreRegistration'
    >
      <div>
        <h4>Choose a language for your election materials.</h4>
        <form onSubmit={props.onSubmit} className='ballot-language-form'>
          <div className='inner-bottom'>
            <SelectorCollection
              name='ballotLanguage'
              values={VALUES}
              onChange={props.onChange}
              selectedValue={props.selectedValue}
            />
          </div>

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};

export default BallotLanguageFormPreReg;

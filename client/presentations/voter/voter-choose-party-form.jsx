'use strict';

import React                 from 'react';
import SelectorCollection    from '../selector-collection.jsx';
import Page                   from '../page.jsx';

const VALUES = ['Yes', 'I do not wish to choose a political party'];
let pageTitle = 'DMV: License application - Voting registration'

const PoliticalPartyChoose = (props) => {
  return (
    <Page
      sectionNumber='3'
      sectionName='Voting registration'
      pageTitle={pageTitle}
      {...props}
    >
      <div className='choose-party'>
        <h4>Would you like to choose a political party preference?</h4>
        <p>In order to vote for a presidential candidate in a primary election, you
        may need to be registered with that political party.</p>
          <div className='inner-bottom'>
            <SelectorCollection
              name='isSelected'
              values={VALUES}
              onChange={props.onChange}
              selectedValue={props.selectedValue}
            />
          </div>
      </div>
    </Page>
  );
};

export default PoliticalPartyChoose;

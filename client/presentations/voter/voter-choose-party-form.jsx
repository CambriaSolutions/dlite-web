'use strict';

import React                 from 'react';
import SelectorCollection    from '../selector-collection.jsx';
import Page                   from '../page.jsx';
import { getAgeGroup }        from '../../helpers/calculate-age';

const VALUES = ['Yes', 'I do not wish to choose a political party'];

const PoliticalPartyChoose = (props) => {
  
  return (
    <Page
      pageTitle='DMV: License application - Voting registration'
      sectionNumber='3'
      sectionName='Voting registration'
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

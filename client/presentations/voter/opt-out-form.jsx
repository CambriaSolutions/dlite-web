'use strict';

import React from 'react';

import RadioCollection    from '../radio-collection.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Page               from '../page.jsx';
import { getCurrentAge, getAgeGroup }     from '../../helpers/calculate-age';

const VALUES = [
  "I am a new voter in California",
  "I am already registered to vote in California",
  "I am eligible to vote, but do not want to register to vote"
];

const PREREG_VALUES = [
  "I would like to pre-register to vote",
  "I am already pre-registered to vote in California",
  "I am eligible to vote, but do not want to pre-register to vote"
];

let pageTitle = 'DMV: License application - Voting registration'

const OptOut = (props) => {
  let ageGroup = getAgeGroup(props.dateOfBirth.age);
  let radioList = [];
  let documentHeader = [];

  if (ageGroup === "YOUTH_GREATER_THAN_15_AND_LESS_THAN_18") {
    documentHeader.push(
      'Voting pre-registration'
    )
    radioList.push(
      <RadioCollection
        key='radio'
        name='optOut'
        values={ PREREG_VALUES }
        onChange={ props.onChange }
        selectedValue={ props.selectedValue }
      />
    );
  }
  else {
    documentHeader.push(
      'Voting registration'
    )
    radioList.push(
      <RadioCollection
        key='radio'
        name='optOut'
        values={ VALUES }
        onChange={ props.onChange }
        selectedValue={ props.selectedValue }
      />
    );
  }

  return (
    <Page
      pageTitle={ pageTitle }
      sectionNumber='3'
      sectionName={ documentHeader }
      {...props}
    >
      <div>
        <h4>Which best describes you?</h4>
        <form onSubmit={ props.onSubmit } className='opt-out-form'>
          <div className='inner-bottom'>
            { radioList }
          </div>

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};

export default OptOut;

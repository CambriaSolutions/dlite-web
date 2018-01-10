'use strict';

import React from 'react';

import { hasValue } from '../../helpers/data/validations';

const EligibilityRequirements = (props) => {
  let value = props.eligibilityRequirements;

  if(props.eligibilityRequirements === 'null') {
    value = 'Decline to answer';
  }

  if (!hasValue(value)) { return null; }

  return (
    <div className='summary-section'>
      <p> Voter registration eligibility met: {value} </p>
    </div>
  );
};

export default EligibilityRequirements;

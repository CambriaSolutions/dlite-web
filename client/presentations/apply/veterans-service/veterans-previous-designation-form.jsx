'use strict';

import React from 'react';

import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import { getDL }            from '../../../helpers/data/card-type';

const header = {
  DL: 'Is "Veteran" printed on your Driver License?',
  ID: 'Is "Veteran" printed on your ID?'
};

const VeteransPreviousDesignation = (props) => {
  if(props.veteransService.isVeteran !== 'Yes' || props.cardAction !== 'renew') { return null; }

  const headerText = getDL(props) ? header.DL : header.ID;

  let values = {
    Yes: 'Yes',
    No: 'No'
  };

  return (
    <div className='veterans-previous-designation-form'>
      <h4>{headerText}</h4>
      <div className='input-container'>
        <RadioCollection 
          {...props}
          name='previouslyDesignated'
          text={values}
        >
          <RadioSelector 
            value='Yes'
          />
          <RadioSelector 
            value='No'
          />
        </RadioCollection>
      </div>
    </div>
  );
};

export default VeteransPreviousDesignation;

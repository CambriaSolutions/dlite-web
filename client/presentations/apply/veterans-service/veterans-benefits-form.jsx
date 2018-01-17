'use strict';

import React from 'react';

import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import MessageBox           from '../../message-box.jsx';

const VeteransBenefits = (props) => {
  if(props.veteransService.isVeteran !== 'Yes') { return null; }
  let values = {
    Yes: 'Yes',
    No: 'No'
  };
  return (
    <div className='veterans-benefits-form'>
      <MessageBox className='thanks'>
        <div className='veteran-thank-you-message'>
          <p className='question'>Thank you for your service, {props.legalName.firstName}.</p>
        </div>
      </MessageBox>
      <hr/>
      <h2 className='question'>Would you like to receive benefits information for which you may be eligible?</h2>
      <div className='input-container'>
        <RadioCollection 
          {...props}
          name='receiveBenefits'
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

export default VeteransBenefits;

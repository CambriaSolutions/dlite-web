'use strict';

import React from 'react';

import HomeLink               from '../home-link.jsx';
import SelectorCollection     from '../selector-collection.jsx';

const OPTIONS = ['Yes', 'No'];

const Form = (props) => {
  return (
    <div className='veterans-benefits-form'>
      <div className='veteran-thank-you-message'>
        <h5>Thank you for your service, {props.firstName}.</h5>
      </div>
      <h4>Would you like to receive benefits information for which you may be eligible?</h4>
      <div className='input-container'>
        <SelectorCollection
          name='receiveBenefits'
          values={OPTIONS}
          onChange={ props.onChange }
          selectedValue={props.selectedValue}
        />
      </div>
    </div>
  );
};

export default Form;

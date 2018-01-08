'use strict';

import React              from 'react';
import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';

const Form = (props) => {
  if(props.licenseType.needEndorsement !== 'Yes') { return null; }

  const text = {
    firefighter: 'Firefighter',
    ambulance: 'Ambulance'
  };

  return (
    <div className='endorsement-form'>
      <h3 className='question'>Which?</h3>
      <p>Select all that apply</p>
      <div className='row inner-bottom'>
        <CheckboxCollection
          {...props}
          name  = 'endorsement'
          array = {props.licenseType}
          text  = {text}
        >
          <CheckboxSelector
            value     = 'firefighter'
          />
          <CheckboxSelector
            value     = 'ambulance'
          />
        </CheckboxCollection>
      </div>
    </div>
  );
};

export default Form;

'use strict';

import React from 'react';

import RadioCollection        from '../../radio-selector-collection.jsx';
import RadioSelector          from '../../radio-selector.jsx';

import { mustChooseCard }     from '../../../helpers/data/real-id';

let collectionTexts = {
  ID: 'ID',
  DL: 'DL'
};

const Form = (props) => {
  if (!mustChooseCard(props)) { return null; }

  return (
    <div className='real-id-form'>
      <hr />
      <h2 className='question'>Which card would you like to fly with?</h2>
      <p>
        Either your license or your ID card can be made federally
        compliant to fly within the United States, but not both
      </p>

      <RadioCollection
        {...props}
        name          = 'realIdDesignation'
        text          = { collectionTexts }
        errorMessage  = { props.validations.designation() }
      >
        <RadioSelector value='ID' />
        <RadioSelector value='DL' />
      </RadioCollection>

    </div>
  );
};

export default Form;

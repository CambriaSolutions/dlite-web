'use strict';

import React from 'react';

import CheckboxSelector   from '../../checkbox-selector.jsx';
import {
  getNewID,
  getNewDL
} from '../../../helpers/data/card-type.js'

const Form = (props) => {
  if(props.cardAction !== 'new') { return null; }

  return (
    <div className='row inner-bottom choose-new-cards'>
      <p>Select all that apply.</p>
      <CheckboxSelector
        {...props}
        selected={ getNewID(props) }
        name='new'
        value='ID'
        text='ID'
      />

      <CheckboxSelector
        {...props}
        selected={ getNewDL(props) }
        name='new'
        value='DL'
        text='Driver License'
      />
      <div className='unit spacer' />
    </div>
  )
};

export default Form;

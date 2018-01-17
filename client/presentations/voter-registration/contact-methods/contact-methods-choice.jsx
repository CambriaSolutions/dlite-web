'use strict';

import React              from 'react';

import RadioSelector      from '../../radio-selector.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';

const values = {
  Yes: 'Yes',
  No: 'No',
  Skip: 'Skip Section'
};

const ContactChoice = (props) => {

  return (
    <div>
      <div className='contact-methods-choice-form'>
        <h2 className='question'>Would you like to receive election information via email or text</h2>
        <div>
          <RadioCollection  
            {...props}
            name='shouldContact'
            text={values}
          >
            <RadioSelector 
              value='Yes'
            />
            <RadioSelector 
              value='No'
            />
            <RadioSelector 
              value='Skip'
            />
          </RadioCollection>
   
        </div>

        <div>
          <p>Who gets this information?</p>
          <p>Secretary of State and County election officials have access to this information.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactChoice;

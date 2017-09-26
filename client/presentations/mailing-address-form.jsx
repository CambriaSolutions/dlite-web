'use strict';

import React from 'react';

import HomeLink         from './home-link.jsx';
import StateSelector    from './state-selector.jsx';
import TextInput        from './text-input.jsx';
import ContinueButton   from './continue-button.jsx';
import AddressTemplate  from './address-template.jsx';

const Form = (props) => {
  return (
    <div className='mailing-address-form'>
      <HomeLink />

      <h4>Where do you receive mail?</h4>
      <h5>For example: 1234 H Street, Apt. 200, Los Angeles, CA. 90017</h5>
      <div className='addresses-section'>
        <form onSubmit={props.onSubmit}>

          <AddressTemplate
            type='mailing'
            address={ props.mailingAddress }
            onChange={ props.onChange }
          />

          <ContinueButton disabled={props.continueDisabled} />
        </form>
      </div>
    </div>
  )
};

export default Form;

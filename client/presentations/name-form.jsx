'use strict';

import React from 'react';

import HomeLink  from './home-link.jsx';
import TextInput from './text-input.jsx';
import alicePath from '../helpers/alice-path';

const LegalNameForm = (props) => {
  let continueDisabled = props.legalName.lastName.length === 0;

  let onSubmit = (event) => {
    props.onSubmit(event);
    props.history.push(
      alicePath('/about-me/date-of-birth')
    );
  };

  return (
    <div className='legal-name-form'>
      <HomeLink />
      <form onSubmit={onSubmit}>
        <TextInput
          identifier='firstName'
          description='First name'
          value={props.legalName.firstName}
          onChange={props.onChange}
        />

        <TextInput
          identifier='middleName'
          description='Middle name'
          value={props.legalName.middleName}
          onChange={props.onChange}
        />

        <TextInput
          identifier='lastName'
          description='Last name'
          value={props.legalName.lastName}
          onChange={props.onChange}
        />

        <div className='shadow-container'>
          <input
            type="submit"
            value="Continue"
            disabled={continueDisabled}
          />
        </div>
      </form>
    </div>
  )
};

export default LegalNameForm;

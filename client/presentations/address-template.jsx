'use strict';

import React from 'react';

import StateSelector from './state-selector.jsx';
import TextInput from './text-input.jsx';
import { error } from 'util';

const generateIdentifier = (name, type) => {
  const upcasedName = name[0].toUpperCase() + name.slice(1);
  return `${type}${upcasedName}`;
};

const generateErrorMessage = (validations, name) => {
  let errors =  validations.__proto__[name]();
  return errors;
}

const AddressTemplate = (props) => {
  return (
    <div className='addresses-section'>
      <TextInput
        name={ generateIdentifier('street_1', props.type) }
        id={ generateIdentifier('street_1', props.type) }
        description='Street Address'
        value={ props.address['street_1'] }
        onChange={props.onChange}
        errorMessage={
          props.type === 'home' ? props.validations.homeStreet_1()        :
          props.type === 'mailing' ? props.validations.mailingStreet_1()  :
          null
        }
        onBlur={props.onBlurValidate}
        onFocus={props.onFocusClearValidation}
      />

      <TextInput
        name={ generateIdentifier('street_2', props.type) }
        id={ generateIdentifier('street_2', props.type) }
        description='Apartment or Unit Number (optional)'
        value={ props.address['street_2'] }
        onChange={props.onChange}
        errorMessage={
          props.type === 'home' ? props.validations.homeStreet_2()        :
          props.type === 'mailing' ? props.validations.mailingStreet_2()  :
          null
        }
        onBlur={props.onBlurValidate}
        onFocus={props.onFocusClearValidation}
      />

      <TextInput
        name={ generateIdentifier('city', props.type) }
        id={ generateIdentifier('city', props.type) }
        description='City'
        value={ props.address['city'] }
        onChange={props.onChange}
        errorMessage={
          props.type === 'home' ? props.validations.homeCity()        :
          props.type === 'mailing' ? props.validations.mailingCity()  :
          null
        }
        onBlur={props.onBlurValidate}
        onFocus={props.onFocusClearValidation}
      />

      <StateSelector
        name={ generateIdentifier('state', props.type) }
        id={ generateIdentifier('state', props.type) }
        value={ props.address['state'] }
        onChange={props.onChange}
      />

      <TextInput
        name={ generateIdentifier('zip', props.type) }
        id={ generateIdentifier('zip', props.type) }
        description='Zip Code'
        value={ props.address['zip'] }
        onChange={props.onChange}
        errorMessage={
          props.type === 'home' ? props.validations.homeZip()        :
          props.type === 'mailing' ? props.validations.mailingZip()  :
          null
        }
        onBlur={props.onBlurValidate}
        onFocus={props.onFocusClearValidation}
      />
    </div>
  );
}

export default AddressTemplate;

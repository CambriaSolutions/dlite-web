'use strict';

import React          from 'react';

import StateSelector  from './state-selector.jsx';
import TextInput      from './text-input.jsx';
import { error }      from 'util';
import Translator     from '../i18n/translator-tag.jsx';

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
        {...props}
        name          = { generateIdentifier('street_1', props.type) }
        id            = { generateIdentifier('street_1', props.type) }
        value         = { props.address['street_1'] }
        errorMessage  = {
          props.type === 'home' ? props.validations.homeStreet_1()              :
          props.type === 'mailing' ? props.validations.mailingStreet_1()        :
          props.type === 'guardian_0' ? props.validations.guardian_0Street_1()  :
          props.type === 'guardian_1' ? props.validations.guardian_1Street_1()  :
          null
        }
      >
        <Translator tag = 'span' translationPath = 'myBasics.addressesPage.streetAddressLabel' />
      </TextInput>

      <TextInput
        {...props}
        name          = { generateIdentifier('street_2', props.type) }
        id            = { generateIdentifier('street_2', props.type) }
        value         = { props.address['street_2'] }
        errorMessage  = {
          props.type === 'home' ? props.validations.homeStreet_2()              :
          props.type === 'mailing' ? props.validations.mailingStreet_2()        :
          props.type === 'guardian_0' ? props.validations.guardian_0Street_2()  :
          props.type === 'guardian_1' ? props.validations.guardian_1Street_2()  :
          null
        }
      >
        <Translator tag = 'span' translationPath = 'myBasics.addressesPage.apartmentLabel' />
      </TextInput>

      <TextInput
        {...props}
        name          = { generateIdentifier('city', props.type) }
        id            = { generateIdentifier('city', props.type) }
        value         = { props.address['city'] }
        errorMessage  = {
          props.type === 'home' ? props.validations.homeCity()              :
          props.type === 'mailing' ? props.validations.mailingCity()        :
          props.type === 'guardian_0' ? props.validations.guardian_0City()  :
          props.type === 'guardian_1' ? props.validations.guardian_1City()  :
          null
        }
      >
        <Translator tag = 'span' translationPath = 'myBasics.addressesPage.cityLabel' />
      </TextInput>

      <StateSelector
      name={ generateIdentifier('state', props.type) }
      id={ generateIdentifier('state', props.type) }
      value={ props.address['state'] }
      onChange={props.onChange}
      />

      <TextInput
        {...props}
        name          = { generateIdentifier('zip', props.type) }
        id            = { generateIdentifier('zip', props.type) }
        value         = { props.address['zip'] }
        errorMessage  = {
          props.type === 'home' ? props.validations.homeZip()              :
          props.type === 'mailing' ? props.validations.mailingZip()        :
          props.type === 'guardian_0' ? props.validations.guardian_0Zip()  :
          props.type === 'guardian_1' ? props.validations.guardian_1Zip()  :
          null
        }
      >
        <Translator tag = 'span' translationPath = 'myBasics.addressesPage.zipLabel' />
      </TextInput>
    </div>
  );
}

export default AddressTemplate;

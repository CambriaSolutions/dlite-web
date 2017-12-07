'use strict';

import React from 'react';

import { updateContactMethods }     from '../../actions/index';
import HomeLink                     from '../../presentations/home-link.jsx';
import NavigationButtons            from '../../presentations/navigation-buttons.jsx';
import ContactChoice                from '../../presentations/voter/contact-methods-choice.jsx';
import ContactDetails               from '../../presentations/voter/contact-methods-details.jsx';
import connectForm                  from '../../helpers/connect-form';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import navigateOnBack               from '../../helpers/navigate-on-back';
import * as dataPresent             from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled    = false;
  let showContactDetails  = false;
  let onSubmit            = navigateOnSubmit('/voting-registration/confirmation', props);
  let onBack              = navigateOnBack('/voting-registration/vote-by-mail', props);

  if(props.contactMethods.shouldContact === 'Yes') {
    showContactDetails  = true;
    continueDisabled    = !(dataPresent.contactMethods(props.contactMethods));

    return (
      <div>
        <form onSubmit={onSubmit}>
          <ContactChoice
            onChange      = {props.onChange}
            selectedValue = {props.contactMethods.shouldContact}
            dateOfBirth   = {props.dateOfBirth}
          />
          <ContactDetails
            onChange       = {props.onChange}
            contactDetails = {props.contactMethods}
            onBack         = { onBack }
          />
        <NavigationButtons
          continueDisabled={continueDisabled}
          onBack={onBack}
        />
        </form>
      </div>
    );
  }

  return (
    <div>

      <form onSubmit={onSubmit}>
        <ContactChoice
          onChange      = {props.onChange}
          selectedValue = {props.contactMethods.shouldContact}
          dateOfBirth   = {props.dateOfBirth}
        />
        <NavigationButtons
          continueDisabled={continueDisabled}
          onBack={onBack}
        />
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    contactMethods: state.application.contactMethods,
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateContactMethods, ConnectedForm);

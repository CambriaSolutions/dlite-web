'use strict';

import React from 'react';

import { updateDateOfBirth }  from "../../actions/index";
import Form                   from "../../presentations/apply/date-of-birth-form.jsx";
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          =   navigateOnSubmit('/my-basics/address', props);
  let onBack            =   navigateOnBack('/my-basics/legal-name', props);
  let continueDisabled  =   !(dataPresent.date(props.dateOfBirth));
  let pageTitle         =   'DMV: License application - My basics'
  
  return (
    <Form
      pageTitle         = { pageTitle }
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      onChange          = { props.onChange }
      dateOfBirth       = { props.dateOfBirth }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateDateOfBirth, ConnectedForm);

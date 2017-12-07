'use strict';

import React from 'react';

import { updateBallotByMail }       from '../../actions/index';
import Form                         from '../../presentations/voter/ballot-by-mail-form.jsx';
import connectForm                  from '../../helpers/connect-form';
import * as dataPresent             from '../../helpers/data-present';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import navigateOnBack               from '../../helpers/navigate-on-back';

const ConnectedForm = (props) => {

  const onSubmit = navigateOnSubmit('/voting-registration/contact-methods', props);
  const onBack = navigateOnBack('/voting-registration/language', props);
  let continueDisabled = !(dataPresent.value(props.ballotByMail));

  return (
    <Form
      onSubmit          = {onSubmit}
      onBack            = {onBack}
      onChange          = {props.onChange}
      selectedValue     = {props.ballotByMail}
      continueDisabled  = {continueDisabled}
      dateOfBirth       = {props.dateOfBirth}
    />
  );
};

function mapStateToProps(state) {
  return {
    ballotByMail: state.application.ballotByMail,
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateBallotByMail, ConnectedForm);

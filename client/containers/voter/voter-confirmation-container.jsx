'use strict';

import React from 'react';

import { updateDateOfBirth }   from '../../actions/index';
import VoterRegComplete        from '../../presentations/voter/voter-confirmation.jsx';
import PreRegVoterRegComplete  from '../../presentations/voter/voter-confirmation-prereg.jsx';
import connectForm             from '../../helpers/connect-form';
import { isPreregistering }    from '../../helpers/calculate-age';

const ConnectedForm = (props) => {
  let content = [];

  if (isPreregistering(props.dateOfBirth)) {
    content.push(
      <PreRegVoterRegComplete
        key='voting pre-registration complete'
        age={props.dateOfBirth.age} />
    );
  } else {
    content.push(
      <VoterRegComplete
        key='voting registration complete'
        age={props.dateOfBirth.age} />
    );
  }

  return (
    <div>
      {content}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateDateOfBirth, ConnectedForm);

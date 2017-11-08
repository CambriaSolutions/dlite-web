'use strict';

import React from 'react';

import { updateHomeAddress }   from "../../actions/index";
import Form                    from "../../presentations/apply/home-address-form.jsx";
import connectForm             from '../../helpers/connect-form';
import navigateOnSubmit        from '../../helpers/navigate-on-submit';
import * as dataPresent        from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled  = false;
  let pageTitle   = 'About me: Home address';

  return (
    <Form
      pageTitle         = { pageTitle }
      onChange          = { props.onChange }
      homeAddress       = { props.homeAddress }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    homeAddress: state.application.homeAddress
  };
}

export default connectForm(mapStateToProps, updateHomeAddress, ConnectedForm);

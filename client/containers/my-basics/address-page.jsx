'use strict';

import React                        from 'react';
import connectForm                  from '../../helpers/connect-form';
import handlers                     from '../../helpers/handlers';
import { AddressValidator }         from '../../helpers/validations';

import {
  updateAddress,
  updateMailingAddress,
  updateHomeAddress
 }     from '../../actions/index';

import Presentation                 from '../../presentations/my-basics/address-page.jsx';

const Page = (props) => {
  let locale                  = props.locale;
  let validations             = new AddressValidator(Object.assign(props.address, {locale}), props.validations);
  let onBack                  = handlers.navigateOnBack(props, validations);
  let onSubmit                = handlers.navigateOrShowErrors('addresses', props, validations);

  return (
    <Presentation
      {...props}
      onSubmit              = { onSubmit }
      onBack                = { onBack }
      validations           = { validations }
    />
  );
};

function mapStateToProps(state) {
  return {
    address       : state.application.basics.address,
    cardType      : state.application.cardType,
    focused       : state.ui.focus,
    validations   : state.ui.validations,
    cardType      : state.application.cardType,
    locale        : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateAddress, Page);
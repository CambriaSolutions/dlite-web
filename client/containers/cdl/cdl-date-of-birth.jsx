'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';
import handlers                 from '../../helpers/handlers';
import { DOBValidator }         from '../../helpers/validations';
import Presentation             from '../../presentations/get-started/date-of-birth-page.jsx';
import { updateCdlDob }         from '../../actions/index';

const Page = (props) => {
  let locale = props.locale;
  let validations       = new DOBValidator(Object.assign(props.dateOfBirth, {locale} ), props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('cdlDateOfBirth', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onBack      = {onBack}
      onSubmit    = { onSubmit }
      validations = { validations }
    />
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth:  state.cdl.basics.dateOfBirth,
    validations:  state.ui.validations,
    focused:      state.ui.focus,
    addApp:       state.ui.addApp,
    locale:       state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCdlDob, Page);
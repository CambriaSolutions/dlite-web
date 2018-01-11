'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import { updateRealID }           from "../../actions/index";
import handlers                   from '../../helpers/handlers';
import Presentation               from "../../presentations/intro/real-id-page.jsx";
import { RealIDValidator }        from '../../helpers/validations';

const Page = (props) => {
  let validations       = new RealIDValidator(props, props.validations, 'realIdSelectionMissing');
  let onSubmit          = handlers.navigateOrShowErrors('realID', props, validations)
  let onBack            = handlers.navigateOnBack(props);

  let focus             =   function(e) {
    props.onFocusClearValidation(e);
    return props.onFocus(e);
  };

  return <Presentation
    {...props}
    onSubmit            = { onSubmit }
    onBack              = { onBack }
    validations         = { validations }
    onFocus             = { focus }
  />;
};

const mapStateToProps = (state) => {
  return {
    realID :    state.application.realID,
    cardType:   state.application.cardType,
    seniorID:   state.application.seniorID,
    focused:    state.ui.focus,
    validations:state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateRealID, Page);

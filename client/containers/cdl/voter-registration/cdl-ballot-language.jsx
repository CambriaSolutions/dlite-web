'use strict';

import React                      from 'react';
import connectForm                from '../../../helpers/connect-form';
import { updateCDLLanguage }      from '../../../actions/index';
import Presentation               from '../../../presentations/voter-registration/ballot-language-page.jsx';
import handlers                   from '../../../helpers/handlers';
import { BallotLanguageValidator} from '../../../helpers/validations';

const Page = (props) => {
  let validations       = new BallotLanguageValidator(props.ballotLanguage, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('cdlChooseBallotLanguage', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit        = { onSubmit }
      onBack          = { onBack }
      selectedValue   = { props.ballotLanguage }
      validations     = { validations }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    ballotLanguage  : state.cdl.voting.ballotLanguage,
    dateOfBirth     : state.cdl.basics.dateOfBirth,
    focused         : state.ui.focus,
    validations     : state.ui.validations,
    flow            : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLLanguage, Page);

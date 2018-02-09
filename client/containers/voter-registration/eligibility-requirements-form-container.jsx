'use strict';

import React                              from 'react';
import { updateEligibilityRequirements }  from '../../actions/index';
import handlers                           from '../../helpers/handlers';
import Presentation                       from '../../presentations/voter-registration/eligibility-requirements-page.jsx';
import { mergePropsGenerator }            from '../../helpers/merge-props';

const Page = (props) => {
  let validations       = {
    isValid: () => true
  };
  let onSubmit          = handlers.navigateOrShowErrors('votingEligibility', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit      = {onSubmit}
      onBack        = {onBack}
      selectedValue = {props.eligibilityRequirements}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    eligibilityRequirements:  state.application.eligibilityRequirements,
    dateOfBirth:              state.application.dateOfBirth,
    focused:                  state.ui.focus
  };
};

export default mergePropsGenerator(mapStateToProps, updateEligibilityRequirements, 'updateEligibility', Page);
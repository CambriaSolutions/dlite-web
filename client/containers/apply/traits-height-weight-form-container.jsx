'use strict';

import React                from 'react';
import connectForm          from '../../helpers/connect-form';

import handlers             from '../../helpers/handlers';
import * as dataPresent     from '../../helpers/data-present';

import { updateTraitsHeightWeight }  from "../../actions/index";
import Presentation                  from "../../presentations/apply/traits-height-weight-page.jsx";


const Page = (props) => {
  let continueDisabled   = !dataPresent.traitsHeightWeight(props.traitsHeightWeight);
  let onSubmit           = handlers.navigateOnSubmit('/my-basics/social-security', props);
  let onBack             = handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit            = { onSubmit }
      onBack              = { onBack }
      continueDisabled    = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    traitsHeightWeight: state.application.traitsHeightWeight,
    focused:            state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateTraitsHeightWeight, Page);
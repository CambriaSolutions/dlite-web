'use strict';

import React                    from 'react';
import connectForm              from '../../../helpers/connect-form';
import handlers                 from '../../../helpers/handlers';
import { AddressValidator }     from '../../../helpers/validations';
import Presentation             from '../../../presentations/cdl/residency.jsx';
import { updateCdlResidency }   from '../../../actions/index';

const Page = (props) => {
  let validations       = new AddressValidator(props.address, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('cdlResidency', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onBack      = { onBack }
      onSubmit    = { onSubmit }
      validations = { validations }
    />
  );
};

function mapStateToProps(state) {
  return {
    address:        state.cdl.basics.address,
    validations:    state.ui.validations,
    focused:        state.ui.focus,
    hover:          state.ui.hover,
    flow:           state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCdlResidency, Page);
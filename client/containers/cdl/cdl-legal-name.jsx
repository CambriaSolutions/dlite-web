'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';
import handlers                 from '../../helpers/handlers';
import { NamePageValidator }    from '../../helpers/validations';
import Presentation             from '../../presentations/cdl/cdl-legal-name.jsx';
import { updateCdlLegalName }   from '../../actions/index';

const Page = (props) => {
  let validations       = new NamePageValidator(props.legalName, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('cdlLegalName', props, validations);
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
    legalName:    state.CDL.basics.legalName,
    validations:  state.ui.validations,
    focused:      state.ui.focus,
    hover:        state.ui.hover
  };
};

export default connectForm(mapStateToProps, updateCdlLegalName, Page);
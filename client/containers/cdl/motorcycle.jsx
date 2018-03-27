'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';
import handlers               from '../../helpers/handlers';
import { updateCDLMotorcycle } from '../../actions/index';
import Presentation           from '../../presentations/cdl/class-m-page.jsx';
import { SelectionValidator } from '../../helpers/validations';

const Page = (props) => {
  let validations       = new SelectionValidator(props.classM, props.validations, 'applicationActionMissing');
  let onSubmit          = handlers.navigateOrShowErrors('motorcycle', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
    />
  )
};

function mapStateToProps(state) {
  return {
    classM              : state.cdl.classM,
    focused             : state.ui.focus,
    validations         : state.ui.validations,
    flow                : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLMotorcycle, Page);

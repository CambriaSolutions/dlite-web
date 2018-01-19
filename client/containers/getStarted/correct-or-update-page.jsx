'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';
import handlers               from '../../helpers/handlers';
import { updateCardChanges }  from '../../actions/index';
import Presentation           from '../../presentations/getStarted/correct-or-update-page.jsx';
import { ChangeValidator }    from '../../helpers/validations';

const Page = (props) => {
  let validations       = new ChangeValidator(props.cardChanges, props.validations, 'applicationActionMissing'); 
  let onSubmit          = handlers.navigateOrShowErrors('updateAndCorrect', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);
  
  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.cardChanges.correctOrUpdate }
      validations       = { validations }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardChanges         : state.application.cardChanges,
    cardType            : state.application.cardType,
    cardAction          : state.application.cardAction,
    dateOfBirth         : state.application.dateOfBirth,
    focused             : state.ui.focus,
    validations         : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateCardChanges, Page);

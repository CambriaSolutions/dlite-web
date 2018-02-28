'use strict';

import React                      from 'react';
import { updateNamesHistory }     from '../../actions/index';
import { NamesValidator }         from '../../helpers/validations';
import connectForm                from '../../helpers/connect-form';
import handlers                   from '../../helpers/handlers';
import Presentation               from '../../presentations/my-history/names-history-page.jsx';

const Page = (props) => {
  let locale            = props.locale;
  let validations       = new NamesValidator(Object.assign(props.namesHistory, {locale}), props.validations, 'selectionMissing');
  let onSubmit          = handlers.navigateOrShowErrors('nameHistory', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
    />
  );
};

function mapStateToProps(state) {
  return {
    namesHistory: state.application.history.namesHistory,
    IDApp       : state.application.IDApp,
    DLApp       : state.application.DLApp,
    cardType    : state.application.cardType,
    focused     : state.ui.focus,
    validations : state.ui.validations,
    locale      : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateNamesHistory, Page);


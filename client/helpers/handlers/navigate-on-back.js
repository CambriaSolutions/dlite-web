'use strict';
import { goToSummary }    from '../data/pathnames';

const normalFlowOrValid = (props, validator) => {
  if (goToSummary(props)) {
    return (props.onSubmitShowErrors && validator && validator.isValid());
  } else {
    return true;
  }
};

const onBackGenerator = (props, validator) => {

  const goBack = (event) => {
    if (props.onSubmit) { props.onSubmit(event); }
    props.history.goBack();
  };

  if (normalFlowOrValid(props, validator)) {
    return goBack;
  } else {
    return props.onSubmitShowErrors;
  }

};

export default onBackGenerator;

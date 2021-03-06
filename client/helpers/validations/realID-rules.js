'use strict';

import selectionValidator   from './selection-validator';
import { mustChooseCard }   from '../data/real-id';
import { noCardTypeArray }  from '../data/cdl';

let designation = (props) => {
  let errors = [];
  if (!noCardTypeArray(props)){
    if (mustChooseCard(props)) {
      errors.push('errorMessages.realIdCardSelectionMissing');
    }
  }
  return errors;
};

export default {
  realID: selectionValidator('realIdSelectionMissing', 'realID'),
  designation: designation
};

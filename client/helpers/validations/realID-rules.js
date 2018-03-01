'use strict';

import selectionValidator   from './selection-validator';
import { mustChooseCard }   from '../data/real-id';
import translations         from '../../i18n';


let designation = (props) => {
  let locale = props.locale;
  let errors = [];
  if (mustChooseCard(props)) {
    errors.push(translations[locale].errorMessages.realIdCardSelectionMissing);
  }
  return errors;
};

export default {
  realID: selectionValidator('realIdSelectionMissing', 'realID'),
  designation: designation
};

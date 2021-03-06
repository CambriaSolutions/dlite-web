import selectionValidator       from './selection-validator';
import { hasOnlyEnglishChars }  from '../data/validations';

let checkNames = (props) => {
  if (props.hasUsedPreviousNames !== 'Yes') { return [];}

  let errors = [];
  errors = selectionValidator('nameHistorySelectionMissing', 'previousNames')(props);
  if (!hasOnlyEnglishChars(props.previousNames)) {
    errors.push('errorMessages.inputIncludesNonEnglishCharacters');
  }
  return errors;
};

export default {
  hasUsedPreviousNames: selectionValidator('nameHistorySelectionMissing', 'hasUsedPreviousNames'),
  previousNames: checkNames
};
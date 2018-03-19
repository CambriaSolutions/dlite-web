'use strict';

import React              from 'react';
import TextArea           from '../../text-area.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const EnterPreviousNames = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className='enter-previous-names'>
      <hr />
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myHistory.nameHistoryPage.explanationPrompt'
      />
      <Translator
        tag             = 'p'
        translationPath = 'myHistory.nameHistoryPage.helpText'
      />

      <fieldset role='group' aria-label='Previous names'>
        <TextArea
          {...props}
          identifier='previousNames'
          description={ <Translator tag = 'span' translationPath = 'summaryPage.myHistory.previousNames' /> }
          value      = { props.namesHistory.previousNames }
          errorMessage  = { props.validations.previousNames() }
        />
      </fieldset>
    </div>
  );
};

export default EnterPreviousNames;

'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import MessageBox         from '../../message-box.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const VeteransBenefits = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='veterans-benefits-form'>
      <MessageBox className='thanks'>
        <div className='veteran-thank-you-message'>
          {convertToHtml('p', translations[locale].myHistory.veteransPage.messageYes, 'question')}
        </div>
      </MessageBox>

      <hr />

      {convertToHtml('h2', translations[locale].myHistory.veteransPage.benefitsPrompt, 'question')}

      <div className='input-container'>
        <fieldset>
          <RadioCollection
            {...props}
            name='receiveBenefits'
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default VeteransBenefits;

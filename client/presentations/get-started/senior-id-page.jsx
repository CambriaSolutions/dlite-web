'use strict';

import React from 'react';

import RadioCollection    from '../radio-selector-collection.jsx';
import radioYesNoGroup    from '../radio-yes-no-group.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Page               from '../../containers/page.jsx';
import translations       from '../../i18n';
import { convertToHtml }  from '../../i18n/convert-to-html.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={props.onSubmit} className='senior-id-form'>
        {convertToHtml('h2', translations.intro.seniorIdPage.prompt, 'question')}
        {convertToHtml('p', translations.intro.seniorIdPage.explanation)}

        <hr />

        <div className='row'>
          <fieldset>
            <RadioCollection
              {...props}
              name = 'seniorID'
              onBlur = { props.onBlurValidate }
              errorMessage = {props.validations.seniorID() }
            >
              { radioYesNoGroup() }
            </RadioCollection>
          </fieldset>
        </div>

        <NavigationButtons
          errorMessage = {props.validations.seniorID() }
          {...props}
        />
      </form>
    </Page>
  )
};

export default Form;

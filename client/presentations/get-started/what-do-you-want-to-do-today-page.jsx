'use strict';

import React                from 'react';

import Page                 from '../../containers/page.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import RadioSelector        from '../radio-selector.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import translations         from '../../i18n';
import Translate            from '../../i18n/translate-tag.jsx';
import {
  getCorrectString
}  from '../../helpers/data/card-type';

const Form = (props) => {
  let locale = props.locale;

  const tempObjectThatNeedsTranslations = {
    explanation: '',
    values: [
      "Get a driver license for the first time",
      "Renew your driver license",
      "Correct or update your driver license",
      "Replace your driver license"
    ]
  };

  const anotherTempObjectThatNeedsTranslation = {
    explanation: '',
    values: [
      'Get an ID card for the first time',
      'Renew your ID card',
      'Correct or update your ID card',
      'Replace your ID card'
    ]
  };

  let text = getCorrectString(
    props,
    tempObjectThatNeedsTranslations,
    anotherTempObjectThatNeedsTranslation,
    translations[locale].intro.wdywtdtPage,
  );

  let name = getCorrectString(
    props, 'DLAction', 'IDAction', 'cardAction',
  );

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-action'>
        <Translate tag='h2' className='question'>
          { translations[locale].intro.wdywtdtPage.prompt }
        </Translate>

        <Translate tag='p'>
          { text.explanation }
        </Translate>

        <form onSubmit= { props.onSubmit }>
          <div className='row inner-button'>
            <fieldset>
              <RadioCollection
                {...props}
                name    = { name }
                onBlur  = { props.onBlurValidate }
                errorMessage = { props.validations.cardAction() }
              >
                <RadioSelector
                  value = 'new'
                  text={text.values[0]}
                  className='long-text'
                />
                <RadioSelector
                  value = 'renew'
                  text={text.values[1]}
                  className='long-text'
                />
                <RadioSelector
                  value = 'change'
                  text={text.values[2]}
                  className='long-text'
                />
                <RadioSelector
                  value='replace'
                  text={text.values[3]}
                  className='long-text'
                />
              </RadioCollection>
            </fieldset>
          </div>
          <NavigationButtons
            errorMessage= { props.validations.cardAction() }
            { ...props }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;

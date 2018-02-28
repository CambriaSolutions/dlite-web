'use strict';

import React                    from 'react';
import NavigationButtons        from '../navigation-buttons.jsx';
import RadioSelector            from '../radio-selector.jsx';
import RadioCollection          from '../radio-selector-collection.jsx';
import Page                     from '../../containers/page.jsx';
import PoliticalPartyPreference from './voter-choose-party/political-party-preference.jsx';
import translations             from '../../i18n';
import { checkPreReg }          from '../../helpers/data/youth';
import Translate                from '../../i18n/translate-tag.jsx';

const ChoosePartyPage = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit={props.onSubmit} className = 'choose-party-form'>
        <div className='choose-political-party'>
          <Translate tag='h2' className='question'>
            { translations[locale].votingRegistration.choosePartyPage.pagePrompt }
          </Translate>
          <Translate tag='p'>
            { translations[locale].votingRegistration.choosePartyPage.explanation }
          </Translate>

          <fieldset>
            <RadioCollection
            {...props}
            name          = 'isSelected'
            selectedValue = {props.politicalPartyChoose.isSelected}
            errorMessage  = {props.validations.isSelected()}
          >
            <RadioSelector
              value='Yes'
              text={translations[locale].shared.commonAnswers.yes}
              className='long-text'
            />
            <RadioSelector
              value='Skip'
              text={translations[locale].votingRegistration.choosePartyPage.answerNo}
              className='long-text'
            />
          </RadioCollection>
          </fieldset>
        </div>

        <PoliticalPartyPreference
          {...props}
          selectedValue = {props.politicalPartyChoose.politicalPartyChoose}
          errorMessage  = {props.validations.politicalPartyChoose()}
        />

        <NavigationButtons
          {...props}
          errorMessage = { props.validations.all() }
        />
      </form>
    </Page>
  );
};

export default ChoosePartyPage;

'use strict';

import React                    from 'react';
import NavigationButtons        from '../navigation-buttons.jsx';
import RadioSelector            from '../radio-selector.jsx';
import RadioCollection          from '../radio-selector-collection.jsx';
import Page                     from '../../containers/page.jsx';
import PoliticalPartyPreference from './voter-choose-party/political-party-preference.jsx';
import translations             from '../../i18n';
import { checkPreReg }          from '../../helpers/data/youth';

const ChoosePartyPage = (props) => {
  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit={props.onSubmit} className = 'choose-party-form'>
        <div className='choose-political-party'>
          <h2 className='question'>{translations.votingRegistration.choosePartyPage.pagePrompt}</h2>
          <p>{translations.votingRegistration.choosePartyPage.explanation}</p>

          <fieldset>
            <RadioCollection
            {...props}
            name          = 'isSelected'
            selectedValue = {props.politicalPartyChoose.isSelected}
            errorMessage  = {props.validations.isSelected()}
          >
            <RadioSelector
              value='Yes'
              text={translations.shared.commonAnswers.yes}
            />
            <RadioSelector
              value='Skip'
              text={translations.votingRegistration.choosePartyPage.answerNo}
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

'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import LanguageRadios       from '../language-radios.jsx'
import Page                 from '../../containers/page.jsx';
import translations         from '../../i18n';
import Translation          from '../../i18n/translate-tag.jsx';
import { checkPreReg }      from '../../helpers/data/youth';

const BallotLanguagePage = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit={props.onSubmit} className = 'ballot-language-form'>
        <Translation tag='h2' className='question'>
          {translations[locale].votingRegistration.chooseLanguagePage.pagePrompt}
        </Translation>
        <LanguageRadios
          {...props}
          name         = 'ballotLanguage'
          errorMessage = {props.validations.ballotLanguage()}
        />

        <NavigationButtons
          {...props}
          errorMessage = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default BallotLanguagePage;

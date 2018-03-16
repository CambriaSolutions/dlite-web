'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import radioYesNoGroup      from '../radio-yes-no-group.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import MessageBox           from '../message-box.jsx';
import Page                 from '../../containers/page.jsx';
import translations         from '../../i18n';
import Translation          from '../../i18n/translate-tag.jsx';
import { isYes, isNo }      from '../../helpers/data/validations';
import { checkPreReg }      from '../../helpers/data/youth';

const infoText = {
  Yes: 'Ok, your ballot will now come by mail. You can still vote in-person at your polling place.',
  No: 'Ok, you vote in-person at your polling place.'
};

const InfoMessageYes = (props) => {
  if (!isYes(props.selectedValue)) { return null; }
  return (
    <MessageBox className = 'info'>
      <p className='translation-missing'>{infoText.Yes}</p>
    </MessageBox>
  )
};

const InfoMessageNo = (props) => {
  if (!isNo(props.selectedValue)) { return null; }
  return (
    <MessageBox className = 'info'>
      <p className='translation-missing'>{infoText.No}</p>
    </MessageBox>
  )
};

const BallotByMailPage = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit={props.onSubmit} className = 'ballot-by-mail-form'>
        <Translation tag='h2' className='question'>
          {translations[locale].votingRegistration.byMailPage.pagePrompt}
        </Translation>
        <Translation tag='p'>
          {translations[locale].votingRegistration.byMailPage.explanation}
        </Translation>

        <fieldset>
          <RadioCollection
            {...props}
             name          = 'ballotByMail'
          errorMessage  = { props.validations.ballotByMail() }
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>

        <InfoMessageYes
          selectedValue = { props.selectedValue }
        />

        <InfoMessageNo
          selectedValue = { props.selectedValue }
        />

        <NavigationButtons
          {...props}
          errorMessage = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default BallotByMailPage;

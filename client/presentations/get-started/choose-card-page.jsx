'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import ChooseCardCheckbox from './choose-card/choose-card-checkbox.jsx';
import ChooseCardRadio    from './choose-card/choose-card-radio.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import { isGettingNew }   from '../../helpers/data/card-actions';
import { IDorDL }         from '../../helpers/data/card-type';

const Form = (props) => {
  let question = {
    new: 'What type of card would you like?',
    renew: 'What type of card are you renewing?',
    change: 'What type of card are you correcting or updating?',
    replace: 'What type of card are you replacing?'
  };

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-form'>
        <h2 className='question'>{question[props.cardType.cardAction]}</h2>

        <form onSubmit={ props.onSubmit } >
          <ChooseCardCheckbox
            {...props}
            showIf    = { isGettingNew(props) }
          />
          <ChooseCardRadio
            {...props}
            showIf        = { !isGettingNew(props) }
            selectedValue = { IDorDL(props) }
          />

          <NavigationButtons errorMessage = { props.validations.cardType() }
            {...props}
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;

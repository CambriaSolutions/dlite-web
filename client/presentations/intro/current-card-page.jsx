'use strict';

import React              from 'react';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import TextInput          from '../text-input.jsx';
import DateInput          from '../date-input.jsx';

const question = {
  ID: 'If you know it, <b>please enter your California ID number</b>.',
  DL: 'If you know it, <b>please enter your California Driver License number</b>.'
};

const instruction = {
  ID: 'Your number can be found at the top of your ID, starting with a letter.',
  DL: 'Your number can be found at the top of your Driver License, starting with a letter.'
};

const card = {
  ID: 'ID',
  DL: 'Driver License'
}

const description = {
  ID: 'ID card number',
  DL: 'Driver License card number'
};

const Form = (props) => {
  const IDorDL          = props.cardType[props.cardAction] || 'ID';
  const cardText        = card[IDorDL]
  const questionText    = question[IDorDL];
  const instructionText = instruction[IDorDL];
  const descriptionText = description[IDorDL];

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='current-card-form'>
        <form onSubmit={ props.onSubmit }>
          <h2 className='question'>Card details</h2>
          <p dangerouslySetInnerHTML={{__html: questionText}} />
          <p dangerouslySetInnerHTML={{__html: instructionText}} />
          <div className='row inner-bottom'>
            <TextInput
              {...props}
              identifier='number'
              description={ descriptionText }
              value={ props.currentCardInfo.number }
              errorMessage={ props.currentCardValidation.number() }
              onChange={props.onChange}
              onBlur={props.onBlurValidate}
              onFocus={props.onFocusClearValidation}
            />
          </div>

          <label htmlFor='expirationDate'>Expriration date</label>
          <div id='expirationDate' className='row inner-bottom'>
          <DateInput
            {...props}
            description = 'Expiration Date'
            onBlur      = { props.onBlurValidate }
            onFocus     = { props.onFocusClearValidation }
            values      = { props.currentCardInfo }
            validations = { props.currentCardValidation }
          />
          </div>

          <NavigationButtons
            {...props}
            errorMessage={ props.currentCardValidation.all() }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;

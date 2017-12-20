'use strict';

import React from 'react';

import RealIdForm             from "./real-id/selectors.jsx";
import RealIdDesignationForm  from "./real-id/choose-card-selectors.jsx";
import NavigationButtons      from '../navigation-buttons.jsx';
import Page                   from '../page.jsx';
import Accordion              from '../../containers/accordion.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      pageTitle='DMV: License application - My basics'
      sectionNumber='1'
      sectionName='My basics'
    >
      <form onSubmit={props.onSubmit}>
        <RealIdForm
          {...props}
          onChange = { props.onChange }
          selectedValue = { props.realID.getRealID }
        />

        <RealIdDesignationForm
          {...props}
          selectedValue = { props.realID.realIdDesignation }
        />

       <Accordion
          id='real-id-info'
          title='What is a federally compliant card?'
        >
          <p>
            To meet the REAL ID Act, the California DMV will offer two kinds of cards:
            a federally compliant card and a non-compliant card. Both a compliant and a
            non-compliant driver license allow you to legally drive and prove your identity.
          </p>
          <p>
            <b>You need a federally compliant card in order to </b>
            fly within the U.S or enter a federal building, national laboratory,
            or military base starting October 1, 2020.
          </p>
          <p>Otherwise, you will need a passport or other acceptable document.</p>
        </Accordion>


        <Accordion
          id='real-id-requirements'
          title="What's required to get a federally compliant card?"
        >
          <div>
            You will need <b>1</b> of following:
            <ul className='bullet-list'>
              <li>valid U.S. passport,</li>
              <li>birth certificate from the U.S. or its territories,</li>
              <li>valid foreign passport with I-94 or I-551,</li>
              <li>valid employment authorization card,</li>
              <li>certificate of naturalization or citizenship, or a</li>
              <li>resident alien card (green card)</li>
            </ul>
            <p>You also need one document that proves where you live.</p>
          </div>
        </Accordion>

        <NavigationButtons
          continueDisabled  = { props.continueDisabled }
          onBack            = { props.onBack }
        />
      </form>
    </Page>
  )
};

export default Form;


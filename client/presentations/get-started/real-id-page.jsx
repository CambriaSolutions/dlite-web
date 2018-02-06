'use strict';

import React from 'react';

import NavigationButtons      from '../navigation-buttons.jsx';
import Page                   from '../../containers/page.jsx';
import Accordion              from '../../containers/accordion.jsx';
import RealIdDesignationForm  from './real-id/choose-card-selectors.jsx';
import ChooseRealID           from './real-id/choose-real-id.jsx';
import translations           from '../../i18n';
import { convertToHtml }      from '../../i18n/convert-to-html.jsx';

const FormPage = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit  = { props.onSubmit } >
        <ChooseRealID
          {...props}
          selectedValue = { props.realID.getRealID }
        />

        <RealIdDesignationForm
          {...props}
          selectedValue = { props.realID.realIdDesignation }
        />

       <Accordion
          id='real-id-info'
          title={translations.intro.realIdPage.FAQWhatIsRealID.title}
        >
          {convertToHtml('p', translations.intro.realIdPage.FAQWhatIsRealID.body)}
        </Accordion>


        <Accordion
          id='real-id-requirements'
          title={translations.intro.realIdPage.FAQWhatIsRequiredForRealID.title}
        >
          <div>
            {convertToHtml('p', translations.intro.realIdPage.FAQWhatIsRequiredForRealID.body.header)}
            <ul className='bullet-list'>
              {convertToHtml('li', translations.intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[0])}
              {convertToHtml('li', translations.intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[1])}
              {convertToHtml('li', translations.intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[2])}
              {convertToHtml('li', translations.intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[3])}
              {convertToHtml('li', translations.intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[4])}
              {convertToHtml('li', translations.intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[5])}
              {convertToHtml('li', translations.intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[6])}
            </ul>
            {convertToHtml('p', translations.intro.realIdPage.FAQWhatIsRequiredForRealID.body.otherRequirements)}
          </div>
        </Accordion>

        <NavigationButtons
          onBack            = { props.onBack }
          errorMessage      = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default FormPage;


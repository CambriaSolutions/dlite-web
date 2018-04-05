'use strict';

import React              from 'react';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Translator         from '../../i18n/translator-tag.jsx';

const Presentation = (props) => {
  let email     = 'alice@edl.gov';
  let password  = 'April16';
  let authURL   = `/auth/new/${props.appName}/${props.language}?email=${email}&password=${password}`;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='id-me'>
        <Translator
          tag             = 'h2'
          translationPath = 'newExtracted.intro.getStartedPage.idMe.prompt'
        />

        <fieldset role='group' className='id-me-buttons' aria-label='Authentication buttons'>
          <a href={authURL} className='button green id-me-create'>
            <Translator
            tag             = 'div'
            className       = 'unit'
            translationPath = 'newExtracted.intro.getStartedPage.idMe.create'
            />
            <img src='/images/id-me/white-logo.svg' alt='id.me' className='id-me-logo unit' />
            <Translator
            tag             = 'div'
            className       = 'unit'
            translationPath = 'newExtracted.intro.getStartedPage.idMe.account'
            />
          </a>

          <div className='or-block'>
            <hr className='mid-line'/>
            <Translator
            tag             = 'p'
            className       = 'or'
            translationPath = 'newExtracted.intro.getStartedPage.idMe.or'
            />
          </div>

          <a href={authURL} className='button id-me-sign-in'>
            <Translator
            tag             = 'div'
            className       = 'unit'
            translationPath = 'newExtracted.intro.getStartedPage.idMe.signIn'
            />
            <img src='/images/id-me/dark-logo.svg' alt='id.me' className='id-me-logo unit' />
            <Translator
            tag             = 'div'
            className       = 'unit'
            translationPath = 'newExtracted.intro.getStartedPage.idMe.account'
            />
          </a>
        </fieldset>

        <Translator
          tag             = 'p'
          translationPath = 'beforeIntro.idMePage.emailRequired'
        />
        <Translator
          tag             = 'p'
          translationPath = 'beforeIntro.idMePage.legalIdentity'
        />
        <Translator
          tag             = 'p'
          translationPath = 'beforeIntro.idMePage.dmvPartnering'
        />

        <Translator
          tag             = 'p'
          translationPath = 'beforeIntro.idMePage.learnMore'
        />
      </div>
    </Page>
  );
};

export default Presentation;

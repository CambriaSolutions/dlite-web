'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../../client/helpers/data-present';
import wrapperGenerator         from '../../../support/wrapper';
import CorrectApplicationInfo           from '../../../../../client/presentations/get-started/intro-page/correct-application-info.jsx';
import GetStartedPage           from '../../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../../support/page-store';
import translations             from '../../../../../client/i18n';

describe('CorrectApplicationInfo', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {
    let cardType = {
      IDDL: [],
      cardAction: 'change',
      youthIDInstead: ''
    };
    let cardChanges = {
      correctOrUpdate: 'correct',
      sections: []
    };
    let licenseType = {
      type: [],
      endorsement: [],
      needEndorsement: ''
    };
    let realID = {
      realIdDesignation: '',
      getRealID: ''
    };
    let reducedFee = {
      ID: '',
      form: ''
    };
    let seniorID = '';

    let onChange = spy();

    props = {
      cardType,
      cardChanges,
      licenseType,
      realID,
      reducedFee,
      seniorID,
      onChange
    }
  });

  describe('null', function() {
    it('returns null when user is not correcting a card', function() {
      props.cardChanges.correctOrUpdate = 'update'

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.correct-application-info'), false);
    });
  });

  describe('when applying for ID', function() {
    beforeEach(function() {
      props.cardType.IDDL = ['ID'];
    });

    it('shows application info for correcting an ID', function() {

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
        assert.equal(component.text().includes(translations.intro.getStartedPage.explanation.correct.id), true);
    });
  });

  describe('when applying for DL', function() {
    beforeEach(function() {
      props.cardType.IDDL = ['DL'];
    });

    it('shows application info for correcting a DL', function() {

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
        assert.equal(component.text().includes(translations.intro.getStartedPage.explanation.correct.license), true);
    });
  });
});

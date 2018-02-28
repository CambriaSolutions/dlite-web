'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../../client/helpers/data-present';
import wrapperGenerator         from '../../../support/wrapper';
import ReplaceApplicationInfo           from '../../../../../client/presentations/get-started/intro-page/replace-application-info.jsx';
import GetStartedPage           from '../../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../../support/page-store';
import translations             from '../../../../../client/i18n';

describe('ReplaceApplicationInfo', function() {
  const Wrapper = wrapperGenerator(store);
  let props;
  let locale = 'en';
  beforeEach(function() {
    let cardType = {
      IDDL: [],
      cardAction: 'replace',
      youthIDInstead: ''
    };
    let cardChanges = {
      correctOrUpdate: '',
      sections: []
    };
    let licenseType = {
      type: [],
      endorsement: [],
      needEndorsement: ''
    };
    let realID = {
      realIdDesignation: '', getRealID: ''
    };
    let reducedFee = {
      ID: '',
      form: ''
    };
    let seniorID = '';

    let onChange = spy();

    props = {
      cardType: [],
      cardAction: 'replace',
      IDApp: {
        action: '',
        isApplying: false,
        cardChanges,
        reducedFee,
        seniorID
      },
      DLApp: {
        isApplying: false,
        action: '',
        cardChanges,
        licenseType
      },
      cardChanges,
      licenseType,
      realID,
      reducedFee,
      seniorID,
      onChange,
      locale
    }
  });

  describe('null', function() {
    it('returns null when user not replacing a card', function() {
      props.cardAction = 'renew';

      let component = render(
        <Wrapper>
          <ReplaceApplicationInfo {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.replace-application-info'), false);
    });
  });

  describe('when applying for ID', function() {
    beforeEach(function() {
      props.cardType = ['ID'];
    });

    it('shows application info for replaceing an ID', function() {

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
        assert.equal(component.text().includes(translations[locale].intro.getStartedPage.explanation.replace.id), true);
    });
  });

  describe('when applying for DL', function() {
    beforeEach(function() {
      props.cardType = ['DL'];
    });

    it('shows application info for replaceing a DL', function() {

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
        assert.equal(component.text().includes(translations[locale].intro.getStartedPage.explanation.replace.license), true);
    });
  });
});

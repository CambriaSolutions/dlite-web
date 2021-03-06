'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../../client/helpers/data-present';
import wrapperGenerator         from '../../../support/wrapper';
import DLInfo                   from '../../../../../client/presentations/get-started/intro-page/dl-info.jsx';
import GetStartedPage           from '../../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../../support/page-store';

describe('DLInfo', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {

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
      cardType: ['DL'],
      cardAction: '',
      DLApp: {
        isApplying: true,
        action: '',
        cardChanges,
        licenseType
      },
      IDApp: {
        isApplying: false,
        action: '',
        cardChanges,
        reducedFee,
        seniorID
      },
      cardChanges,
      licenseType,
      realID,
      reducedFee,
      seniorID,
      onChange
    }
  });

  describe('null', function() {
    it('returns null when user not applying for an DL', function() {
      props.cardType = ['ID'];
      props.DLApp.isApplying = false;

      let component = render(
        <Wrapper>
          <DLInfo  {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.dl-info'), false);
    });
  });

  describe('applying for a DL', function() {
    beforeEach(function() {
      props.cardAction = '';
      props.DLApp.action = '';
    });

    it('user getting new DL will see they are applying for driver license on get started page', function() {
      props.cardType.cardAction = 'new';
      props.DLApp.action = 'new';

      let component = render(
        <Wrapper>
          <GetStartedPage  {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes('You are applying for a Driver License'), true);
    });

    it('user renewing DL will see they are renewing driver license on get started page', function() {
      props.cardAction = 'renew';
      props.DLApp.action = 'renew';

      let component = render(
        <Wrapper>
          <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes('You are renewing a Driver License'), true);
    });

    it('user updating DL will see they are updating driver license on get started page', function() {
      props.cardAction = 'change';
      props.cardChanges.correctOrUpdate = 'update';
      props.DLApp.cardChanges.correctOrUpdate = 'update';
      props.DLApp.action = 'change';

      let component = render(
        <Wrapper>
          <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes('You are updating a Driver License'), true);
      assert.equal(component.text().includes('In order to update your driver license, you’re going to need to fill out a new application.'), true);
    });

    it('user correcting DL will see they are correcting driver license on get started page', function() {
      props.cardAction = 'change';
      props.cardChanges.correctOrUpdate = 'correct';
      props.DLApp.cardChanges.correctOrUpdate = 'correct';
      props.DLApp.action = 'change';

      let component = render(
        <Wrapper>
          <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes('You are correcting a Driver License'), true);
      assert.equal(component.text().includes('In order to correct your driver license, you’re going to need to fill out a new application.'), true);
    });

    it('user replacing DL will see they are replacing driver license on get started page', function() {
      props.DLApp.action = 'replace';
      props.cardAction = 'replace';

      let component = render(
        <Wrapper>
          <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes('You are replacing a Driver License'), true);
      assert.equal(component.text().includes('In order to replace your driver license, you’re going to need to fill out a new application.'), true);
    });
  })
});

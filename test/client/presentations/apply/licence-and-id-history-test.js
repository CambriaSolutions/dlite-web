'use strict';

import assert                   from 'assert';

import React from 'react';
import configure  from '../support/configure-enzyme';
import { render } from 'enzyme';
import sinon from 'sinon';
import {MemoryRouter} from 'react-router-dom';

import LicenseIDHistoryPage     from '../../../../client/presentations/apply/license-and-id-history-form.jsx';

describe('LicenseIDHistoryPage', function() {
  let store = {
    ui: {}
  };

  const Wrapper = (props) => {
    return(
      <Provider store={createMockStore(store)}>
        <MemoryRouter>
          {props.children}
        </MemoryRouter>
      </Provider>
    );
  };

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let licenseAndIdHistory = {
        isIssued: '',
        DLIDNumber: '',
        issuedBy: '',
        month: '',
        day: '',
        year: ''
      };

      let cardType = {
        ID: '',
        DL: ''
      };

      let continueDisabled = !(dataPresent.licenseAndIdHistory(licenseAndIdHistory));
      let onChange = spy();

      props = {
        licenseAndIdHistory,
        cardType,
        continueDisabled,
        onChange
      }
    });
    
    it('shows the yes/no form asking if user has ever had an ID', function() {
      let component = render(
        <Wrapper>
          <LicenseIDHistoryPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="isIssuedYes"]').length, 'yes button missing');
      assert.ok(component.find('label[for="isIssuedNo"]').length, 'no button missing');
      assert.ok(component.find('.license-and-id-history-form').length, 'form missing');
    });

    it('renders general license and id history page when applying for both ID and DL', function() {
      props.cardType = {
        ID: true,
        DL: true
      };
  
      let component = render(
        <Wrapper>
          <LicenseIDHistoryPage {...props} />
        </Wrapper>
      );
  
      assert.ok(component.find('.applying-for-dl').length, 'general license and id history page not found');
    });
    it('renders general license and id history page when applying for DL', function() {
      props.cardType = {
        ID: false,
        DL: true
      };
  
      let component = render(
        <Wrapper>
          <LicenseIDHistoryPage {...props} />
        </Wrapper>
      );
  
      assert.ok(component.find('.applying-for-dl').length, 'general license and id form not found');
    });

    it('is limited to CA if user is only getting an ID', function() {
      props.cardType = {
        DL: false,
        ID: true
      };
      let component = render(
        <Wrapper>
          <LicenseIDHistoryPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.applying-for-only-id').length, 'CA specific form not found');
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <LicenseIDHistoryPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('selecting No makes next button no longer disabled', function() {
      props.licenseAndIdHistory.isIssued = 'No';
      props.continueDisabled  =   !(dataPresent.licenseAndIdHistory(props.licenseAndIdHistory));

      let component = render(
        <Wrapper>
          <LicenseIDHistoryPage {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });

    it('selecting Yes makes form appear asking for most recent license details', function() {
      props.licenseAndIdHistory.isIssued = 'Yes';
      let component = render(
        <Wrapper>
          <LicenseIDHistoryPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.existing-license-id-number-form'));
    });

  });

});


'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import SocialSecurityPage       from '../../../../client/presentations/apply/social-security-page.jsx';
import store                    from '../../support/page-store';

describe('SocialSecurityPage', function() {

  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let socialSecurity = {
        hasSocialSecurity: '',
        part1: '',
        part2: '',
        part3: ''
      }
      let continueDisabled = !(dataPresent.socialSecurity(socialSecurity))
      let onChange = spy();

      props = {
        socialSecurity,
        continueDisabled,
        onChange
      }
    });
    
    it('shows the form asking if you have have a social security number', function() {
      let component = render(
        <Wrapper>
          <SocialSecurityPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="hasSocialSecurityNo"]').length, 'No button missing');
      assert.ok(component.find('label[for="hasSocialSecurityYes"]').length, 'Yes button missing');
      assert.ok(component.find('.social-security-option-form').length, 'form missing');
      assert.equal(component.find('.social-security-no-form'), false);
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <SocialSecurityPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('selecting No makes next button no longer disabled and shows message', function() {
      props.socialSecurity.hasSocialSecurity = 'No';
      props.continueDisabled  =   !(dataPresent.socialSecurity(props.socialSecurity));

      let component = render(
        <Wrapper>
          <SocialSecurityPage {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
      assert.ok(component.find('.social-security-no-form', 'message not rendered'));
    });

    it('selecting Yes makes form render to enter social number', function() {
      props.socialSecurity.hasSocialSecurity = 'Yes';

      let component = render(
        <Wrapper>
          <SocialSecurityPage {...props} />
        </Wrapper>
      );

      assert.ok(component.find('.social-security-enter-form'), 'form not rendered');
      assert.ok(component.find('input#part1'), 'social input not found');
      assert.ok(component.find('input#part2'), 'social input not found');
      assert.ok(component.find('input#part3'), 'social input not found');
    });

  });

});


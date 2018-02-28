'use strict';

import assert                   from 'assert';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme'
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import CitizenStatusPage        from '../../../../client/presentations/voter-registration/citizen-status-page.jsx';
import store                    from '../../support/page-store';
import { checkPreReg }          from '../../../../client/helpers/data/youth';

describe('CitizenStatusPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let onChange = spy();
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };
      let citizenStatus = '';
      let prereg = checkPreReg(dateOfBirth);
      let locale = 'en';
      props = {
        dateOfBirth,
        citizenStatus,
        onChange,
        prereg,
        locale
      };
    });

    it('shows the form asking if user is a US citizen', function() {
      let component = render(
        <Wrapper>
          <CitizenStatusPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.citizen-status-form').length, 'form missing');
    });

    it('shows pre-registration language for users who are preregistering', function() {
      let today = new Date();

      props.dateOfBirth = {
        month: (today.getMonth() + 1).toString(),
        day: (today.getDate()).toString(),
        year: (today.getFullYear() - 17).toString()
      };
      props.prereg = checkPreReg(props.dateOfBirth);

      let component = render(
        <Wrapper>
          <CitizenStatusPage  {...props} />
        </Wrapper>
      );

      assert.ok(component.text().includes('If you select Decline to answer, you will not be pre-registered to vote'), 'pre-registration language not found');
    });

    it('shows normal registration language for users who are above 18', function() {
      let today = new Date();

      props.dateOfBirth = {
        month: (today.getMonth()).toString(),
        day: (today.getDate()).toString(),
        year: (today.getFullYear() - 21).toString()
      };

      let component = render(
        <Wrapper>
          <CitizenStatusPage  {...props} />
        </Wrapper>
      );

      assert.ok(component.text().includes('If you select Decline to answer, you will not be registered to vote'), 'registration language not found');
    });
  });
});


'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import store                    from '../../support/page-store';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import DateOfBirthPage          from '../../../../client/presentations/intro/date-of-birth-page.jsx';

describe('DateOfBirthPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let dateOfBirth = {
        year: '',
        month: '',
        day: ''
      };

      let continueDisabled = !(dataPresent.date(dateOfBirth));

      let onChange = spy();

      props = {
        dateOfBirth,
        continueDisabled,
        onChange
      }
    });

    it('shows form for date of birth', function() {
      let component = render(
        <Wrapper>
          <DateOfBirthPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('input#month').length, 'month input missing');
      assert.ok(component.find('input#day').length, 'day input missing');
      assert.ok(component.find('input#year').length, 'year input missing');
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <DateOfBirthPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('entering dob makes next button no longer disabled', function() {
      props.dateOfBirth = {
        month: '9',
        day: '19',
        year: '1984'
      };
      props.continueDisabled  =   !(dataPresent.cardType(props.cardType));

      let component = render(
        <Wrapper>
          <DateOfBirthPage {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });
  });
});


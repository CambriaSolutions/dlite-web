'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import { MemoryRouter }         from 'react-router-dom'
import * as dataPresent         from '../../../../client/helpers/data-present';
import BallotLanguagePage       from '../../../../client/presentations/voter-registration/ballot-language/ballot-language-form.jsx';
import store                    from '../../support/page-store';

describe('BallotLanguagePage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let ballotLanguage = '';
      let continueDisabled = true;
      let onChange = spy();
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };

      props = {
        ballotLanguage,
        dateOfBirth,
        onChange
      }
    });
    
    it('shows the form asking user to choose language', function() {
      let component = render(
        <Wrapper>
          <BallotLanguagePage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="ballotLanguage-Japanese"]').length, 'Japanese option missing');
      assert.ok(component.find('label[for="ballotLanguage-English"]').length, 'English option missing');
      assert.ok(component.find('label[for="ballotLanguage-Chinese"]').length, 'Chinese option missing');
      assert.ok(component.find('label[for="ballotLanguage-Spanish"]').length, 'Spanish option missing');
      assert.ok(component.find('label[for="ballotLanguage-Thai"]').length, 'Thai option missing');
      assert.ok(component.find('label[for="ballotLanguage-Korean"]').length, 'Korean option missing');
      assert.ok(component.find('label[for="ballotLanguage-Tagalog"]').length, 'Tagalog option missing');
      assert.ok(component.find('label[for="ballotLanguage-Hindi"]').length, 'Hindi option missing');
      assert.ok(component.find('label[for="ballotLanguage-Khmer"]').length, 'Khmer option missing');
      assert.ok(component.find('label[for="ballotLanguage-Vietnamese"]').length, 'Vietnamese option missing');
      assert.ok(component.find('.ballot-language-form').length, 'form missing');
    });


    // TODO add testing for if pre-reg is shown in container

  });

});


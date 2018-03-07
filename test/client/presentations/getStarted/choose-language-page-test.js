'use strict';

import assert                   from 'assert';

import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import AppLanguagePage          from '../../../../client/presentations/get-started/choose-language-page.jsx';
import store                    from '../../support/page-store';

describe('BallotLanguagePage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props, component, server;

    beforeEach(function() {
      let appLanguage = '';
      let onChange = spy();
      let locale = 'en';
      server = {apiStatus: ''};
      props = {
        appLanguage,
        onChange,
        locale,
        server
      };

      component = render(
        <Wrapper>
          <AppLanguagePage  {...props} />
        </Wrapper>
      );
    });

    it('shows 10 labels with 2-character values', function() {
      assert.ok(component.find('label[for="appLanguage-ja"]').length, 'Japanese option missing');
      assert.ok(component.find('label[for="appLanguage-en"]').length, 'English option missing');
      assert.ok(component.find('label[for="appLanguage-zh"]').length, 'Chinese option missing');
      assert.ok(component.find('label[for="appLanguage-es"]').length, 'Spanish option missing');
      assert.ok(component.find('label[for="appLanguage-th"]').length, 'Thai option missing');
      assert.ok(component.find('label[for="appLanguage-ko"]').length, 'Korean option missing');
      assert.ok(component.find('label[for="appLanguage-tl"]').length, 'Tagalog option missing');
      assert.ok(component.find('label[for="appLanguage-hi"]').length, 'Hindi option missing');
      assert.ok(component.find('label[for="appLanguage-km"]').length, 'Khmer option missing');
      assert.ok(component.find('label[for="appLanguage-vi"]').length, 'Vietnamese option missing');
    });

    it('no option is selected on initial render', function() {
      assert.ok(!component.find('.selected').length, 'option is already selected');
    });

    it('hides the page if the api is loading', function() {
      server = {apiStatus: 'loading'};
      props.server = server;

      component = render(
        <Wrapper>
          <AppLanguagePage  {...props} />
        </Wrapper>
      );

      assert.ok(component.find('.hide').length, 'page is not hidden by api status');
    });
  });
});


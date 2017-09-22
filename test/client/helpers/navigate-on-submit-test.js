'use strict';

import assert from 'assert';
import sinon from 'sinon';

import navigateOnSubmit from '../../../client/helpers/navigate-on-submit';

describe('navigateOnSubmit', function() {
  let props, navigator, event;

  beforeEach(function() {
    props = {
      onSubmit: sinon.spy(),
      history: []
    };

    navigator = navigateOnSubmit();
  });

  it('calls the prop onSubmit function', function() {
    navigateOnSubmit('/foo/bar', props)();
    assert(props.onSubmit.called, 'onSubmit not called');
  });

  it('pushes an alice url to history', function() {
    navigateOnSubmit('/foo/bar', props)();
    assert.equal(props.history[0], '/services/foo/bar');
  });
});

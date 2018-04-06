'use strict';

import assert       from 'assert';
import sinon        from 'sinon';
import onLoggedIn   from '../../../../client/helpers/handlers/on-logged-in';

describe.only('onLoggedIn', function() {
  let uuid, history, dispatch, onPage;

  beforeEach(function() {
    uuid = '1';
    history = [];
    dispatch = sinon.spy();
    onPage = onLoggedIn(dispatch);
  });

  it('updates language with cookie value', function() {
    document.cookie = 'language=es';
    onPage(uuid, history);

    assert.ok(dispatch.calledWith({
      type: 'UPDATE_LANGUAGE',
      payload: {
        name: 'language',
        value: 'es'
      }
    }), 'update language not called');
  });

  it('gets translations for non-english languages', function() {
    document.cookie = 'language=es';
    onPage(uuid, history);
    // how to test this?

    
    // assert.ok(dispatch.calledWith({
    //   type: 'UPDATE_API_STATUS',
    //   payload: {
    //     name: 'apiStatus',
    //     value: 'loading'
    //   }
    // }), 'update api status not called for 2nd dispatch');
  });

  it('initiates AutoLogout', function() {
    // how to test this
  });

  it('gets user data', function(){
    // how to test this
  });

});


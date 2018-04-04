'use strict';

import assert           from 'assert';
import sinon            from 'sinon';
import onLoggedIn       from '../../../../client/helpers/handlers/on-logged-in';

describe('onLoggedIn handler', function() {
  let user, history, appName, dispatch, onLogIn;

  // beforeEach(function() {
  //   user = '100';
  //   history = [];
  //   appName = '';
  //   dispatch = sinon.spy();
  //   onLogIn = onLoggedIn(dispatch);
  // });

  // it('updates the language with the cookie value', function() {

  //   document.cookie = 'language=xh';
  //   onLogIn(user, history, appName);
  //   assert.ok(dispatch.calledWith({
  //     type: 'UPDATE_LANGUAGE',
  //     payload: {
  //       value: 'xh'
  //     }
  //   }), 'update language dispatch not called or called with incorrect value');
  // });

  // it('loads translations if cookie language is not english', function() {
  //   document.cookie = 'language=vi';
  //   onLogIn(user, history, appName)
  //   .then(() => {
  //     let action = dispatch.getCall(3).args[0];
  //     console.log(action);
  //     assert.equal(action.type, 'GET_TRANSLATION_SUCCESS');
  //     assert.equal(action.payload.value, 'vi');
  //   });
  // });

  // it('doesnt load translations if cookie language is blank', function() {
  //   document.cookie = 'language= ';
  //   onLogIn(user, history, appName)
  //   .then(() => {
  //     let action = dispatch.getCall(3).args[0];
  //     console.log(action);
  //     assert.equal(action.type, 'UPDATE_USER_DATA');
  //   });
  // });

  // it('doesnt load translations if cookie language is english', function() {
  //   document.cookie = 'language=en';
  //   onLogIn(user, history, appName)
  //   .then(() => {
  //     let action = dispatch.getCall(3).args[0];
  //     console.log(action);
  //     assert.equal(action.type, 'UPDATE_USER_DATA');
  //   });
  // });

  // it('gets user data for given id', function() {
  //   onLogIn(user, history, appName)
  //   .then(() => {
  //     let action = dispatch.getCall(3).args[0];
  //     assert.equal(action.type, 'UPDATE_USER_DATA');
  //   });
  // })
});



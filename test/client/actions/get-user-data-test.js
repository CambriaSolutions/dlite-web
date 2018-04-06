'use strict';

'use strict';

import assert                   from 'assert';
import { spy }                  from 'sinon';
import { getUserData }          from '../../../client/actions/get-user-data';

describe.only('getUserData() action', function() {
  let dispatch, uuid, history, response, fetcher, url, userData, appName;

  beforeEach(function() {
    uuid = '100';
    userData = {
      appsLength: 2,
      userID: uuid,
      apps: [{
        name: '',
        cardType: [],
        cardAction: []
      }, {
        name: '',
        cardType: [],
        cardAction: []
      }]
    };
    appName = 'id-and-license';

    response = {
      status: 200,
      json: () => { return userData; }
    };

    dispatch = spy();
    history = [];

    fetcher = (fetchPath) => {
      url = fetchPath;
      return Promise.resolve(response);
    };

  });

  it.only('calls fetch on /api/user/', function() {
    let actionFunction = getUserData(uuid, history, fetcher, appName);
    actionFunction(dispatch);
    assert.equal(url, '/api/user/100');
  });

  it('updates user data after 200 status', function() {
    let actionFunction = getUserData(uuid, history, fetcher, appName);
    actionFunction(dispatch);

    let apiAction = dispatch.getCall(1).args[0];
    assert.deepEqual(apiAction, {
      type: 'UPDATE_USER_DATA',
      payload: {
        value: userData
      }
    });
  });

  it('updates user data with placeholder + uuid if error', function() {
    response = {
      status: 500,
      json: () => { return {message: 'not logged in '}}
    };
    let actionFunction = getUserData(uuid, history, fetcher, appName);
    actionFunction(dispatch);
    assert.ok(dispatch.calledWith({
      type: 'UPDATE_USER_DATA',
      payload: {
        value: {
          appsLength: 0,
          userID: uuid,
          apps: [{
            name: '',
            cardType: [],
            cardAction: []
          }]
        }
      }
    }), 'update user data not dispatched with placeholder object');
  });

  it('saves appName value from cookie to props.chooseApp', function() {
    let actionFunction = getUserData(uuid, history, fetcher, 'cdl');
    actionFunction(dispatch);
    assert.ok(dispatch.calledWith({
      type: 'CHOOSE_APP',
      payload: {
        value: 'cdl'
      }
    }), 'choose app not dispatched with appName value');
  });

  it('pushes to cdlLegalName page if appsLength is 0 and appName is CDL', function() {
    userData.appsLength = 0;
    let actionFunction = getUserData(uuid, history, fetcher, 'cdl');
    actionFunction(dispatch);
    assert.equal(history[0], '/apply/cdl/my-basics/true-name');
  });

  it('pushes to legalName page if appsLength is 0 and appName is id-and-license', function() {
    userData.appsLength = 0;
    let actionFunction = getUserData(uuid, history, fetcher, 'id-and-license');
    actionFunction(dispatch);
    assert.equal(history[0], '/apply/id-and-license/my-basics/legal-name');
  });

  it('pushes to openApplications page if appsLength is greater than 0', function() {
    let actionFunction = getUserData(uuid, history, fetcher, 'id-and-license');
    actionFunction(dispatch);
    assert.equal(history[0], '/apply/open-applications');
  });

  it('pushes to openApplications page if appsLength is 1 but appName differs from apps.cardType[0]', function() {
    userData.appsLength = 1;
    userData.apps[0].cardType[0] === 'ID';

    let actionFunction = getUserData(uuid, history, fetcher, 'cdl');
    actionFunction(dispatch);
    console.log(history)
    assert.equal(history[0], '/apply/open-applications');
  });
});


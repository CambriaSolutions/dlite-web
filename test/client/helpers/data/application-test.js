'use strict';

import assert from 'assert';

import {
  languageIsSelected,
  buildConfCode,
  isProduction,
  requireLogIn,
  afterIntro,
  hasMultipleApps,
  parseAppName,
  sameType,
  goToOpenApps
} from '../../../../client/helpers/data/application';

describe('Data helpers for application', function() {
  describe('#languageIsSelected', function() {
    it('is true when string exists', function() {
      assert.equal(languageIsSelected('en'), true);
    });

    it('is false when value is blank', function() {
      assert.equal(languageIsSelected(''), false);
    });
  });

  describe('#buildConfCode', function() {
    it('returns the first 8 digits of application id with an added dash in the middle and letters in uppercase', function() {
      let props = {
        id: '2b417380-20d6-11e8-9fbd-ef21805fde52'
      };
      assert.equal(buildConfCode(props), '2B41-7380');
    });
  });

  describe('#isProduction', function() {
    it('returns true if env is production', function() {
      assert.equal(isProduction('production'), true);
    });
  });

  describe('#requireLogIn', function() {
    let url, isLoggedIn;
    beforeEach(function() {
      url = '';
      isLoggedIn = false;
    });

    it('returns false if pathname is an intro page', function() {
      url = '/apply/choose-application';
      assert.equal(requireLogIn(url, isLoggedIn), false);
    });
    it('returns false if user is logged in', function() {
      isLoggedIn = true;
      assert.equal(requireLogIn(url, isLoggedIn), false);
    });
    it('returns true if user is not logged in and the pathname is not an intro page', function() {
      url = '/apply/summary';
      assert.equal(requireLogIn(url, isLoggedIn, 'production'), true);
    });
  });

  describe('#afterIntro', function() {
    it('returns false if page is an intro page', function() {
      assert.equal(afterIntro('/apply/choose-application'), false);
    });
    it('returns true if page is not an intro page', function() {
      assert.equal(afterIntro('/apply/id-and-license/legal-name'), true);
    });
  });

  describe('#hasMultipleApps', function() {
    let props;
    beforeEach(function() {
      props = {
        userData: {
          appsLength: 0
        }
      }
    });

    it('returns true if appsLength is greater than 1', function() {
      props.userData.appsLength = 2;
      assert.equal(hasMultipleApps(props), true);
    });
    it('returns false if appsLength is 1', function() {
      props.userData.appsLength = 1;
      assert.equal(hasMultipleApps(props), false);
    });
  });

  describe('#parseAppName', function() {
    let props;
    beforeEach(function() {
      props = {
        chooseApp: '',
        location: {
          pathname: ''
        }
      };
    });
    it('returns props.chooseApp when it is id-and-license', function() {
      props.chooseApp = 'id-and-license';
      assert.equal(parseAppName(props), 'id-and-license');
    });
    it('returns props.chooseApp when it is cdl', function() {
      props.chooseApp = 'cdl';
      assert.equal(parseAppName(props), 'cdl');
    });
    it('returns pathname when it is neither', function() {
      props.chooseApp = '';
      props.location.pathname = '/apply/id-and-license/sign-in';
      assert.equal(parseAppName(props), 'id-and-license');
    });
  });
  
  describe('#sameType', function() {
    let props;
    beforeEach(function() {
      props = {
        userData: {
          apps: [{
            cardType: []
          }]
        },
        appName: ''
      }
    });

    it('returns true if first cardType is DL and saved appName cookie is id-and-license', function() {
      props.userData.apps[0].cardType[0] = 'DL';
      props.appName = 'id-and-license';
      assert.equal(sameType(props), true);
    });

    it('returns true if first cardType is ID and saved appName cookie is id-and-license', function() {
      props.userData.apps[0].cardType[0] = 'ID';
      props.appName = 'id-and-license';
      assert.equal(sameType(props), true);
    });

    it('returns true if first cardType is CDL and saved appName cookie is CDL', function() {
      props.userData.apps[0].cardType[0] = 'CDL';
      props.appName = 'cdl';
      assert.equal(sameType(props), true);
    });

    it('returns false if first cardType is CDL and saved appName cookie is id-and-license', function() {
      props.userData.apps[0].cardType[0] = 'CDL';
      props.appName = 'id-and-license';
      assert.equal(sameType(props), false);
    });

    it('returns false if first cardType is ID and saved appName cookie is CDL', function() {
      props.userData.apps[0].cardType[0] = 'ID';
      props.appName = 'CDL';
      assert.equal(sameType(props), false);
    });
  });

  describe('#goToOpenApps', function() {
    let props;
    beforeEach(function() {
      props = {
        userData: {
          appsLength: '',
          apps: [{
            cardType: []
          }]
        },
        appName: ''
      }
    });

    it('returns true if user has multiple apps', function() {
      props.userData.appsLength = 3;
      assert.equal(goToOpenApps(props), true);
    });

    it('returns true if user already has a IDDL app but logged in to CDL app', function() {
      props.userData.appsLength = 1;
      props.userData.apps[0].cardType = ['DL'];
      props.appName = 'CDL';
      assert.equal(goToOpenApps(props), true);
    });

    it('returns true if user already has a CDL app but logged in to IDDL app', function() {
      props.userData.appsLength = 1;
      props.userData.apps[0].cardType = ['CDL'];
      props.appName = 'id-and-license';
      assert.equal(goToOpenApps(props), true);
    });

    it('returns false if user already has a IDDL app and logged into IDDL app', function() {
      props.userData.appsLength = 1;
      props.userData.apps[0].cardType = ['DL'];
      props.appName = 'id-and-license';
      assert.equal(goToOpenApps(props), false);
    });
  });
});
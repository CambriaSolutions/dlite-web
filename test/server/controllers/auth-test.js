'use strict';

const assert      = require('assert');
const sinon       = require('sinon');
const httpMocks   = require('node-mocks-http');
const controllers = require('../../../server/controllers/auth');

describe('Auth related controllers', () => {
  let req, res, next, passport, authNew, authSuccess;

  beforeEach(function() {
    req = {
      session: {
        user: {
          uuid: 'foo',
        },
        cookie: {},
        save: sinon.spy()
      },
      user: { uuid: '100'},
      params: {appName: 'cdl', language: 'vi'} ,
      query: { state: JSON.stringify({appName: 'cdl', language: 'vi'} )}
    };
    res = httpMocks.createResponse({});
    passport = { authenticate: sinon.spy() };
    res.redirect = sinon.spy();
    res.cookie = sinon.spy();
    next = sinon.spy();
  });

  it('#authSuccess redirects to the logged in page', function() {
    controllers.authSuccess(req, res, next, 'production');
    assert.ok(req.session.save.called);
  });

  it('#authSuccess sets language cookie to req.query.state.language', function() {
    req.query.state = JSON.stringify({language: 'zh', appName: 'cdl'});
    controllers.authSuccess(req, res);
    assert.ok(res.cookie.calledWith('language', 'zh'));
  });

  it('#authSuccess sets appName cookie to req.query.state.appName', function() {
    req.params.appName = 'id-and-license';
    req.query.state = JSON.stringify({language: '', appName: 'id-and-license'});
    controllers.authSuccess(req, res);
    assert.ok(res.cookie.calledWith('appName', 'id-and-license'));
  });
});

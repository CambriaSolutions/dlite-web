'use strict';

import fetch                from 'isomorphic-fetch';
require('es6-promise').polyfill();

import { nextPath }         from '../helpers/navigation/page';
import { getAppNameCookie } from '../helpers/data/cookies';
import { getAppKey }        from '../helpers/data/pathnames';
import {
  updateUserData,
  updateLoggedIn,
  chooseApp
} from './index';

export const getUserData = (uuid, history) => {
  return function(dispatch) {
    dispatch({
      type: 'UPDATE_API_STATUS',
      payload: {
        name: 'apiStatus',
        value: 'loading'
      }
    });
    return fetch('/api/user/' + uuid, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if(res.status === 200) {
          return res.json();
        }
        else {
          throw new Error('user-fail');
        }
      })
      .then(data => {
        dispatch(updateUserData(data));

        dispatch({
          type: 'UPDATE_API_STATUS',
          payload: {
            name: 'apiStatus',
            value: 'success'
          }
        });
        return data;
      })
      .catch((err) => {
        console.log('ERROR');
        console.log(err);

        dispatch({
          type: 'GET_DATA_ERROR',
          payload: {
            data: {},
            error: err.message
          }
        });
        dispatch({
          type: 'UPDATE_API_STATUS',
          payload: {
            name: 'apiStatus',
            value: 'error'
          }
        });
        let userData = {
          appsLength: 0,
          userID: uuid,
          apps: [{
            name: '',
            cardType: [],
            cardAction: []
          }]
        };
        dispatch(updateUserData(userData));
        return userData;
      })
      .then((userData) => {
        let appName = getAppNameCookie();
        dispatch(chooseApp(appName));
        dispatch(updateLoggedIn(true));

        let pageKey = getAppKey(appName);
        let pathURL = nextPath(pageKey, {
          flow: '',
          userData
        });
        return history.push(pathURL);
      });
  };
};
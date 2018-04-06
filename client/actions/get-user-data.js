'use strict';

import fetch                from 'isomorphic-fetch';
require('es6-promise').polyfill();

import { nextPath }         from '../helpers/navigation/page';
import { getAppNameCookie } from '../helpers/data/cookies';
import { getAppKey }        from '../helpers/data/pathnames';
import {
  updateUserData,
  updateLoggedIn,
  chooseApp,
  updateApiStatus
} from './index';

export const getUserData = (uuid, history, fetcher = fetch, appName = getAppNameCookie()) => {
  return (dispatch) => {
    dispatch(updateApiStatus('loading'));

    return fetcher('/api/user/' + uuid, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.debug('response from server');
        if(res.status === 200) {
          return res.json();
        }
        else {
          throw new Error('user-fail');
        }
      })
      .then(data => {
        console.debug('success. save data');
        dispatch(updateUserData(data));
        dispatch(updateApiStatus('success'));

        return data;
      })
      .catch((err) => {
        console.debug('ERROR');
        console.debug(err);

        dispatch({
          type: 'GET_DATA_ERROR',
          payload: {
            data: {},
            error: err.message
          }
        });

        dispatch(updateApiStatus('error'));

        let userData = {
          appsLength: 0,
          userID: uuid,
          apps: [{
            name: '',
            cardType: [],
            cardAction: [],
            id: ''
          }]
        };
        dispatch(updateUserData(userData));
        return userData;
      })
      .then((userData) => {
        // after we fix server error, return this chunk to above the catch
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
'use strict';

import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

export const postData = function (body) {
  return function (dispatch) {
    dispatch({
      type: 'UPDATE_API_STATUS',
      payload: {
        name:   'apiStatus',
        value:  'loading'
      }
    });
    return fetch('/api/application',{
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(function(res){
        if (res.status === 200) {
          return res.json();
        }
        else{
          throw new Error('api-fail');
        }
      })
      .then(function (data) {
        dispatch({
          type: 'POST_DATA_SUCCESS',
          payload: {
            data: data,
            error: null }
        });
        dispatch({
          type: 'UPDATE_API_STATUS',
          payload: {
            name:   'apiStatus',
            value:  'success'
          }
        });
      })
      .catch(function (err) {
        dispatch({
          type: 'POST_DATA_ERROR',
          payload: {
            data: {},
            error: err.message }
        });
        dispatch({
          type: 'UPDATE_API_STATUS',
          payload: {
            name:   'apiStatus',
            value:  'error'
          }
        });
      });
  };
};

export const getData = function (id) {
  return function (dispatch) {
    dispatch({
      type: 'UPDATE_API_STATUS',
      payload: {
        name:   'apiStatus',
        value:  'loading'
      }
    });
    return fetch('/api/application/' + id)
      .then(function(res){
        if(res.status >= 200 && res.status <= 299) {
          return res.json();
        }
        else{
          throw new Error('api-fail');
        }
      })
      .then(function (data) {
        dispatch({
          type: 'GET_DATA_SUCCESS',
          payload: {
            data: data,
            error: null }
        });
        dispatch({
          type: 'UPDATE_API_STATUS',
          payload: {
            name:   'apiStatus',
            value:  'success'
          }
        });
      })
      .catch(function (err) {
        dispatch({
          type: 'GET_DATA_ERROR',
          payload: {
            data: {},
            error: err.message }
          });
          dispatch({
            type: 'UPDATE_API_STATUS',
            payload: {
              name:   'apiStatus',
              value:  'error'
            }
          });
      });
  };
};

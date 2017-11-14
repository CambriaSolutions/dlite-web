'use strict';

import fetch from 'isomorphic-fetch'

export const postData = function (body) {
  return function (dispatch) {
    return fetch('/api/application',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(function(res){
        return res.json();
      })
      .then(function (data) {
        dispatch({
          type: 'POST_DATA_SUCCESS',
          payload: {
            data: data,
            error: null }
        });
      })
      .catch(function (err) {
        dispatch({
          type: 'POST_DATA_ERROR',
          payload: {
            data: {},
            error: err.message }
        });
      })
  }
};

export const getData = function (id) {
  return function (dispatch) {
    return fetch('/api/application/' + id)
      .then(function(res){
        return res.json();
      })
      .then(function (data) {
        dispatch({
          type: 'GET_DATA_SUCCESS',
          payload: {
            data: data,
            error: null }
        });
      })
      .catch(function (err) {
        dispatch({
          type: 'GET_DATA_ERROR',
          payload: {
            data: {},
            error: err.message }
          });
      })
  }
};

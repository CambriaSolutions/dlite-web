'use strict';

import { TYPES }              from '../../actions';
import formCheckArrayReducer  from './form-check-array-reducer';

const defaultState = () => {
  return {
    new: [],
    renew: '',
    change: '',
    youthIDInstead: ''
  }
};

const youthID = (value, data) => {
  if (value !== 'Yes') { return data; }
  return Object.assign({}, data, {new: ['ID']});
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_CARD_TYPE) { return state; }
  if (!action.payload) { return state; }

  let data = Object.assign({}, state);
  let name = action.payload.name;
  let value = action.payload.value;

  if (name === 'youthIDInstead') {
    data[name] = value;
    data = youthID(value, data);
  } else if (name === 'new') {
    data = formCheckArrayReducer(name, value, data);
  } else {
    data[name] = value;
  }
  
  return data;
};

export default formReducer;

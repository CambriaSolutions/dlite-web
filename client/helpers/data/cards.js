'use strict';
import {
  getID,
  getDL,
  IDAppExists,
  DLAppExists
} from './card-type';

export const hasMultipleCards = (props) => {
  return getDL(props) && getID(props)
};

export const IDorDL = (props) => {
  return hasMultipleCards(props) ? 'both' : getID(props) ? 'ID' : getDL(props) ? 'DL' : 'none';
};

export const bothAppsExist = (props) => {
  return IDAppExists(props) && DLAppExists(props);
};

export const hasSelectedClass = (props) => {
  return props.DLApp.licenseType.type.length > 0;
};
'use strict';
import { getUserData }                  from '../../actions/get-user-data';
import getTranslation                   from '../../actions/get-translation';
import { updateLanguage }               from '../../actions/index';
import { doNotNeedToLoadTranslations }  from '../data/translator';
import {
  getLanguageFromCookie,
 } from '../data/cookies';
import AutoLogout                       from './auto-logout';

export default (dispatch) => {
  return (uuid, history) => {

    let cookieLanguage = getLanguageFromCookie();
    dispatch(updateLanguage('language', cookieLanguage));

    if (!doNotNeedToLoadTranslations(cookieLanguage)) {
      console.log('get translation for language: ' + cookieLanguage);
      dispatch(getTranslation(cookieLanguage));
    }

    new AutoLogout(history, dispatch);

    dispatch(getUserData(uuid, history));

    //dispatch(getUserData(uuid))
      // .then((res) => {
      //   console.log('client got response from server');

      //   // let appName = getAppNameCookie();
      //   // dispatch(chooseApp(appName));
      //   // dispatch(updateLoggedIn(true));

      //   // let pageKey = getAppKey(appName);
      //   // let pathURL = nextPath(pageKey, {
      //   //   flow: '',
      //   //   res
      //   // });
      //   // return history.push(pathURL);
      // })
      // .catch((err) => {
      //   console.log('ERROR')
      //   console.log(err);
      // });
  }
};
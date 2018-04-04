'use strict';
import { getUserData }                  from '../../actions/get-user-data';
import getTranslation                   from '../../actions/get-translation';
import { updateLanguage }               from '../../actions/index';
import { nextPath }                     from '../navigation/page';
import { doNotNeedToLoadTranslations }  from '../data/translator';
import { getLanguageFromCookie }        from '../data/cookies';
import {
  getAppKey,
  signInURL
} from '../data/pathnames';

export default (dispatch) => {
  return (user, history, appName) => {

    let cookieLanguage = getLanguageFromCookie();
    dispatch(updateLanguage('language', cookieLanguage))
    if (!doNotNeedToLoadTranslations(cookieLanguage)) {
      dispatch(getTranslation(cookieLanguage));
    }


    dispatch(getUserData(user))
      .then((res) => {
        if (res === 'user-fail') {
          console.log('error: failed to retrieve records')
          return history.push(signInURL(appName));
        }

        let pathURL = res.pathname;
        if(!res.pathname) {
          let pageKey = getAppKey(appName);
          pathURL = nextPath(pageKey, {
            flow: '',
            userData: res
          });
        }

        return history.push(pathURL);
      });
  }
};
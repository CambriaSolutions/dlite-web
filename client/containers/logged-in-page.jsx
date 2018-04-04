'use strict';
import { connect }                from 'react-redux';
import handlers                   from '../helpers/handlers';
import AutoLogout                 from '../helpers/handlers/auto-logout';

import {
  buildLoggedIn,
  getAppNameCookie,
} from '../helpers/data/cookies';

const LoggedIn = (props) => {
  let appName = getAppNameCookie();

  // set isLoggedIn key for localhost
  if (APP_ENV === 'development' || APP_ENV === 'test') {
    buildLoggedIn();
  }
  let history = props.history;
  // begin timer to log out after inactivity
  new AutoLogout(history, appName);

  let user = props.match.params.user;
  props.onLoggedIn(user, history, appName);


  // make api call to /api/user/:id and save result to redux
  // props.dispatch(getUserData(user))
  // .then((res) => {
  //   props.loadTranslationFromCookie();

  //   if (res === 'user-fail') {
  //     console.log('error: failed to retrieve records')
  //     return history.push(signInURL(appName));
  //   }

  //   // include placeholder flow prop
  //   let pathURL = nextPath(pageKey, {
  //     flow: '',
  //     userData: res
  //   });
  //   return history.push(pathURL);
  // });

  return null;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  const onLoggedIn    = handlers.onLoggedIn(dispatch);
  return {
    onLoggedIn
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
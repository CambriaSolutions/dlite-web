'use strict';

const logout = (req, res) => {
  console.log('LOGOUT')
  let appName = req.cookies.appName;
  req.logout();
  let redirectURL = `/apply/${appName}/sign-in`;
  if (!appName || appName.length < 1) {
    redirectURL = '/apply/choose-language'
  }
  req.session.destroy((err) => {
    if (err) {
      console.debug(err);
    }
    res.redirect(redirectURL)
  });
};

module.exports = logout;
'use strict';

const logout = (req, res) => {
  let appName = req.cookies.appName;
  req.logout();
  req.session.destroy();
  if (!appName) {
    return res.redirect('/apply/choose-language');
  }
  res.clearCookie('appName');
  res.redirect(`/apply/${appName}/sign-in`);
};

module.exports = logout;
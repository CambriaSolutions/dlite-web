'use strict';

const logout = (req, res) => {
  let appName = req.cookies.appName;
  req.logout();
  req.session.destroy();
  if (!appName) {
    res.redirect('/apply');
  }
  res.clearCookie('appName');
  res.redirect(`/apply/${appName}/sign-in`);
};

module.exports = logout;
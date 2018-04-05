'use strict';

const router            = require('express').Router();
const controllers       = require('./controllers');



const routes = (passport) => {
  router.get( '/api/application/:id',         controllers.checkAuth,
                                              controllers.getApplication);

  router.post('/api/application',             controllers.checkAuth,
                                              controllers.postApplication);

  router.get( '/api/translation/:code',       controllers.getTranslation);

  router.get( '/api/user/:uuid',              controllers.checkAuth,
                                              controllers.sameUserOnly,
                                              controllers.getUserApps);

  //router.get( '/auth/new/:appName/:language', controllers.authNew(passport));
  router.get( '/auth/new/:appName/:language', (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
      if (user === false) {
        console.log('Local auth failed!');
        res.redirect('/apply/log-out');
      }
      else {
        req.user = { id: 3, uuid: '086925c5ae774015b40720cf8e50410o' };
        req.session.user = req.user;
        if (process.env.APP_URL === 'development' && !process.env.APP_URL.match(/herokuapp/g)) {
          res.redirect(`http://localhost:3000/apply/logged-in/${req.user.uuid}`);
        }
        else {
          res.redirect(`/apply/logged-in/${req.user.uuid}`);
        }
      }
  })(req, res, next)
});

  router.get( '/auth/oauth/callback',         controllers.authCallback(passport),
                                              controllers.authSuccess);

  router.get( '/auth/error',                  controllers.authError);

  router.get( '/apply/log-out',               controllers.checkAuth,
                                              controllers.logout);

  router.get( '/apply*',                      controllers.renderClient);
  router.get( '*.js',                         controllers.sendZip);

  return router;
};

module.exports = routes;


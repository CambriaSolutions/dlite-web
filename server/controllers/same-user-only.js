'use strict';

module.exports = function sameUserOnly(req, res, next, env = process.env.APP_ENV) {
  let isTheSame;
  if (env === 'development' || env === 'test') {
    isTheSame = true;
  } else {
    isTheSame = req.params.uuid === req.session.user.uuid;
  }
  if (isTheSame) {
    next();
  }
  else {
    res.status(500).json({message: 'session user uuid doesnt match requested uuid'});
  }
};
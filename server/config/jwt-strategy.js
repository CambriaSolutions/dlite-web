'use strict';

const passportJWT = require('passport-jwt');

const ExtractJwt  = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey:    process.env.JWT_SECRET
};

// NOTE: this doesn't work yet in many environments, depending on how the envar is set.
// Either switch to a dynamic feature driven auth system, or something else???
let authorizedUsers;
try {
  authorizedUsers = process.env.JWT_USERS.split(/,\s*/);
} catch(e) {
  console.log('Please set JTW_USERS as an environmental variable! Or change the strategy for setting acceptable jwt users.');
  throw(e);
}

function findUser(jwtUsername) {
  return authorizedUsers.find((name) => {
    return name === jwtUsername;
  }) || false;
}

function authorizeApiUsage(payload, next) {
  let user = findUser(payload.user);
  next(null, user);
}

module.exports = {
  strategy:           new JwtStrategy(jwtOptions, authorizeApiUsage),
  authorizeApiUsage:  authorizeApiUsage,
  authorizedUsers:    authorizedUsers
};

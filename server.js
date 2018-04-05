'use strict';

const env               = require('./server/config/env.js');

const express           = require('express');
const bodyParser        = require('body-parser');
const passport          = require('passport');
const session           = require('express-session')
const helmet            = require('helmet');
const expressStaticGzip = require("express-static-gzip");
const cookieParser      = require('cookie-parser');

const logging           = require('./server/config/logging');
const sessionOptions    = require('./server/config/session-options');
const oauthStrategy     = require('./server/models/oauth/strategy').strategy;
const LocalStrategy     = require('passport-local').Strategy;
const serializeUser     = require('./server/models/session/serialize-user');
const deserializeUser   = require('./server/models/session/deserialize-user');
const csrf              = require('./server/config/csrf');
const routes            = require('./server/routes');
const findOrSaveUser    = require('./server/models/db/save-user');

let server = express();

server.use(cookieParser());
server.use(bodyParser.json());
server.use(session(sessionOptions));
server.use(passport.initialize());
server.use(passport.session());

passport.use(oauthStrategy);
passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    let user = { id: 3, uuid: '086925c5ae774015b40720cf8e50410d' }
    done(null, JSON.stringify(user));
  }
));

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

//csrf(server);

server.use(logging());
server.use(helmet());

server.get('/', (req, res) => {
  res.redirect('/apply/choose-application');
});
server.use('/', expressStaticGzip('public'));
server.use(express.static('public'));

server.port = env.port;
server.environment = env.env;

server.use('/', routes(passport));

module.exports = server;

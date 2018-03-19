'use strict';

const env               = require('./server/config/env.js');

const express           = require('express');
const bodyParser        = require('body-parser');
const passport          = require('passport');
const session           = require('express-session')
const helmet            = require('helmet');
const expressStaticGzip = require("express-static-gzip");

const logging           = require('./server/config/logging');
const sessionOptions    = require('./server/config/session-options');
const oauthStrategy     = require('./server/models/oauth/strategy').strategy;
const serializeUser     = require('./server/models/session/serialize-user');
const deserializeUser   = require('./server/models/session/deserialize-user');
const csrf              = require('./server/config/csrf');
const routes            = require('./server/routes');

let server = express();
server.use(passport.initialize());

if (server.get('env') === 'production') {
  server.set('trust proxy', 1) // trust first proxy
  sessionOptions.cookie.secure = true // serve secure cookies
}
server.use(passport.session());
server.use(session(sessionOptions));

passport.use(oauthStrategy);
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

server.use(bodyParser.json());
csrf(server);

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

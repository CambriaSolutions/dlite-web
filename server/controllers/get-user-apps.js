'use strict';

const fetchApplication  = require('../models/db/get-application');
const parseUserData     = require('../models/parsers/user-data');
const saveUser          = require('../models/db/save-user');

module.exports = function getUserApps(req, res){
  // if user id is in db, fetch all app ids associated with it
  return saveUser({uuid: req.params.uuid})
  .then(() => {
    return fetchApplication.byUserId(req.params.uuid)
    .then((records) => {
      let userData;

      if (records.applications.length > 0) {
        console.debug('got records for uuid ' + records);
        userData = parseUserData(records);
        userData.userID = req.params.uuid;
      }
      else {
        userData = {
          appsLength: 0,
          userID: req.params.uuid,
          apps: [{
            name: '',
            cardType: [],
            cardAction: [],
            id: ''
          }]
        };
      }
      return userData;
    });
  })
  .then((userData) => {
    console.debug('preparing to send user data: ' + userData);
    res.json(userData);
  })
  .catch((err) => {
    console.debug('error from server');
    console.debug(err);
    res.status(err.statusCode || 500).json(err);
  });

};
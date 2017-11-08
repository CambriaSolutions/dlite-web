'use strict';

const clientParser    = require('../models/client-data-parser');
const serverParser    = require('../models/server-data-parser');
const getAppModel     = require('../models/db/get-application');
const createAppModel  = require('../models/db/create-application');

function createApplication(req, res) {
  let parsedData = clientParser(req.body);
  createAppModel(parsedData)
  .then(function(data) {
    let _parsedData = serverParser(data);
    res.send(_parsedData);
  }).catch(function(err) {
    res.status(err.statusCode || 500).json(err);
  });
}

function getApplication(req, res) {
  getAppModel(req.params.id)
  .then(function(data) {
    let parsedData = serverParser(data);
    res.send(parsedData);
  }).catch(function(err) {
    res.status(err.statusCode || 500).json(err);
  });
}

module.exports.createApplication  = createApplication;
module.exports.getApplication     = getApplication;
'use strict';

const defaultClientState    = require('./client-default-state');
const cardTypeParser        = require('./card-type');
const CDLObject             = require('./server-to-client-parsers/cdl');
const IDDLObject            = require('./server-to-client-parsers/iddl');

function parse(data) {
  let appObject = {};
  if (cardTypeParser.isCDLDatabase(data)){
    if (!data) {
      appObject = defaultClientState.CDL;
    }
    else {
      appObject = CDLObject(data);
    }
  }
  else {
    if(!data) {
      appObject = defaultClientState.IDDL;
    }
    else {
      appObject = IDDLObject(data);
    }
  }
  return appObject;
}

module.exports = parse;
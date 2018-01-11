'use strict';

const assert            = require('assert');
const dataParser        = require('../../../server/helpers/data-parser');

describe('dataParser', function() {
  describe('stringToBool', function() {
    it('returns null when data equals "decline"', function() {
      let val = 'decline';
      assert.equal(dataParser.strToBool(val), 'decline');
    });
  
    it('returns false when data equals "No"', function(){
      let val = 'No';
      assert.equal(dataParser.strToBool(val), false);
    });
  
    it('returns true when data equals "Yes"', function() {
      let val = 'Yes';
      assert.equal(dataParser.strToBool(val), true);
    });
  });

  describe('boolToStr', function() {
    it('returns "decline" when data equals "decline"', function() {
      let val = "decline";
      assert.equal(dataParser.boolToStr(val), 'decline');
    });

    it('returns "No" when data is false', function() {
      let val = false;
      assert.equal(dataParser.boolToStr(val), 'No');
    });

    it('returns "Yes" when data is true', function() {
      let val = true;
      assert.equal(dataParser.boolToStr(val), 'Yes');
    });
  });

});


